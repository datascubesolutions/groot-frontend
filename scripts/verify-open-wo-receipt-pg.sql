-- PostgreSQL: verify OWR line overhead vs sum(shop.production_value)
-- Run in order. Replace CONFIG placeholders after step 1–2. Header id = API "data.id" (e.g. 29907).

-- =============================================================================
-- 1) Find tables that hold your API fields (run first; use results in step 3)
-- =============================================================================
SELECT table_schema, table_name, column_name
FROM information_schema.columns
WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
  AND (
    column_name = 'over_head_value'
    OR column_name = 'open_wo_header_id'
    OR column_name = 'open_wo_rec_id'
    OR column_name = 'production_value'
  )
ORDER BY table_schema, table_name, column_name;

-- =============================================================================
-- 2) If needed: list only tables with over_head_value
-- =============================================================================
SELECT table_schema, table_name
FROM information_schema.columns
WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
  AND column_name = 'over_head_value'
ORDER BY 1, 2;

-- =============================================================================
-- 3) CONFIG: schema-qualified table names from step 1 (edit these two lines)
--     detail = line with item_code, received_qty, over_head_value
--     shop   = operation rows with production_value, open_wo_rec_id
-- =============================================================================
-- Example after you know names:
--   v_detail := 'mfg.owr_line';
--   v_shop   := 'mfg.owr_shop';
-- Or use this DO block: set the two text vars, then the header id.

DO $$
DECLARE
  v_header_id bigint := 29907;  -- API data.id
  v_line_no   int := 1;          -- set if several lines (matches detail + shop line_no)
  v_detail    text := 'CHANGE_ME.DETAIL_TABLE';  -- e.g. 'public.owr_detail'
  v_shop      text := 'CHANGE_ME.SHOP_TABLE';  -- e.g. 'public.owr_shop_op'
  sql         text;
  ovh         numeric;
  shop_sum    numeric;
BEGIN
  IF v_detail LIKE 'CHANGE_ME%' OR v_shop LIKE 'CHANGE_ME%' THEN
    RAISE EXCEPTION
      'Set v_detail and v_shop to real schema.table names (see step 1 output).';
  END IF;

  sql := format(
    'SELECT d.over_head_value::numeric
       FROM %s d
      WHERE d.open_wo_header_id = $1
        AND d.line_no::int = $2
      LIMIT 1',
    v_detail
  );
  EXECUTE sql USING v_header_id, v_line_no INTO ovh;

  sql := format(
    'SELECT coalesce(sum(s.production_value::numeric), 0)
       FROM %s s
      WHERE s.open_wo_rec_id = $1
        AND s.line_no::int = $2',
    v_shop
  );
  EXECUTE sql USING v_header_id, v_line_no INTO shop_sum;

  RAISE NOTICE 'over_head_value: %, sum(production_value): %, diff: %',
    ovh, shop_sum, ovh - shop_sum;
END;
$$;

-- =============================================================================
-- 4) Optional: same check as plain SQL (replace schema.table, then run)
-- =============================================================================
/*
SELECT
  d.open_wo_header_id,
  d.line_no,
  d.over_head_value::numeric     AS over_head_value,
  sum(s.production_value::numeric) AS shop_production_sum,
  d.over_head_value::numeric
    - sum(s.production_value::numeric) AS diff
FROM "CHANGE_ME_SCHEMA"."CHANGE_ME_DETAIL" AS d
LEFT JOIN "CHANGE_ME_SCHEMA"."CHANGE_ME_SHOP" AS s
  ON s.open_wo_rec_id = d.open_wo_header_id
 AND s.line_no = d.line_no
WHERE d.open_wo_header_id = 29907
GROUP BY d.open_wo_header_id, d.line_no, d.over_head_value;
*/
