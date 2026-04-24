-- PostgreSQL: verify + fix IRN truncation for one exact transaction row
-- Run in order. Replace CONFIG placeholders after step 1.
-- Locked row:
--   return_header_id = 470252
--   stock_id         = 610405
--   issue_detail_id  = 9000795
--   fifo_lifo_id     = 3674244

-- =============================================================================
-- 1) Find candidate IRN tables/columns (run first)
-- =============================================================================
SELECT table_schema, table_name, column_name
FROM information_schema.columns
WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
  AND (
    column_name = 'return_header_id'
    OR column_name = 'stock_id'
    OR column_name = 'issue_detail_id'
    OR column_name = 'fifo_lifo_id'
    OR column_name = 'item_code'
    OR column_name = 'item_name'
    OR column_name = 'item_uom'
    OR column_name = 'from_warehouse_code'
    OR column_name = 'to_warehouse_code'
  )
ORDER BY table_schema, table_name, column_name;

-- =============================================================================
-- 2) SOFT CHECK ONLY (no update)
--    Set v_target and v_source from step 1.
-- =============================================================================
DO $$
DECLARE
  v_header_id       bigint := 470252;
  v_stock_id        text := '610405';
  v_issue_detail_id text := '9000795';
  v_fifo_lifo_id    text := '3674244';

  v_target text := 'CHANGE_ME.TARGET_TABLE'; -- e.g. public.irn_return_detail
  v_source text := 'CHANGE_ME.SOURCE_TABLE'; -- e.g. public.irn_return_detail_src

  sql text;
  v_count bigint;
BEGIN
  IF v_target LIKE 'CHANGE_ME%' OR v_source LIKE 'CHANGE_ME%' THEN
    RAISE EXCEPTION 'Set v_target and v_source to real schema.table names.';
  END IF;

  sql := format(
    'SELECT count(*)
       FROM %s t
       JOIN %s s
         ON s.return_header_id::text = t.return_header_id::text
        AND s.stock_id::text         = t.stock_id::text
        AND s.issue_detail_id::text  = t.issue_detail_id::text
        AND s.fifo_lifo_id::text     = t.fifo_lifo_id::text
      WHERE t.return_header_id::bigint = $1
        AND t.stock_id::text = $2
        AND t.issue_detail_id::text = $3
        AND t.fifo_lifo_id::text = $4
        AND (
             coalesce(length(trim(trailing from t.item_code::text)),0)
           < coalesce(length(trim(trailing from s.item_code::text)),0)
          OR coalesce(length(trim(trailing from t.item_name::text)),0)
           < coalesce(length(trim(trailing from s.item_name::text)),0)
          OR coalesce(length(trim(trailing from t.item_uom::text)),0)
           < coalesce(length(trim(trailing from s.item_uom::text)),0)
          OR coalesce(length(trim(trailing from t.from_warehouse_code::text)),0)
           < coalesce(length(trim(trailing from s.from_warehouse_code::text)),0)
          OR coalesce(length(trim(trailing from t.to_warehouse_code::text)),0)
           < coalesce(length(trim(trailing from s.to_warehouse_code::text)),0)
        )',
    v_target, v_source
  );
  EXECUTE sql USING v_header_id, v_stock_id, v_issue_detail_id, v_fifo_lifo_id INTO v_count;

  RAISE NOTICE 'soft-check mismatch rows: %', v_count;
END $$;

-- =============================================================================
-- 3) Preview exact before/after row (plain SQL; replace table names)
-- =============================================================================
/*
SELECT
  t.return_header_id, t.stock_id, t.issue_detail_id, t.fifo_lifo_id,
  t.item_code AS target_item_code, s.item_code AS source_item_code,
  t.item_name AS target_item_name, s.item_name AS source_item_name,
  t.item_uom AS target_item_uom, s.item_uom AS source_item_uom,
  t.from_warehouse_code AS target_from_wh_code, s.from_warehouse_code AS source_from_wh_code,
  t.to_warehouse_code AS target_to_wh_code, s.to_warehouse_code AS source_to_wh_code
FROM "CHANGE_ME_SCHEMA"."CHANGE_ME_TARGET" t
JOIN "CHANGE_ME_SCHEMA"."CHANGE_ME_SOURCE" s
  ON s.return_header_id::text = t.return_header_id::text
 AND s.stock_id::text         = t.stock_id::text
 AND s.issue_detail_id::text  = t.issue_detail_id::text
 AND s.fifo_lifo_id::text     = t.fifo_lifo_id::text
WHERE t.return_header_id::bigint = 470252
  AND t.stock_id::text = '610405'
  AND t.issue_detail_id::text = '9000795'
  AND t.fifo_lifo_id::text = '3674244';
*/

-- =============================================================================
-- 4) IMPLEMENT FIX (single row only, with safety checks)
--    Set v_apply_fix := true only after step 2 + 3 are verified.
-- =============================================================================
DO $$
DECLARE
  v_header_id       bigint := 470252;
  v_stock_id        text := '610405';
  v_issue_detail_id text := '9000795';
  v_fifo_lifo_id    text := '3674244';

  v_target text := 'CHANGE_ME.TARGET_TABLE';
  v_source text := 'CHANGE_ME.SOURCE_TABLE';
  v_apply_fix boolean := false;

  sql text;
  v_candidate int;
  v_updated int;
BEGIN
  IF v_target LIKE 'CHANGE_ME%' OR v_source LIKE 'CHANGE_ME%' THEN
    RAISE EXCEPTION 'Set v_target and v_source to real schema.table names.';
  END IF;

  IF NOT v_apply_fix THEN
    RAISE NOTICE 'Implement skipped (v_apply_fix=false).';
    RETURN;
  END IF;

  sql := format(
    'SELECT count(*)::int
       FROM %s t
       JOIN %s s
         ON s.return_header_id::text = t.return_header_id::text
        AND s.stock_id::text         = t.stock_id::text
        AND s.issue_detail_id::text  = t.issue_detail_id::text
        AND s.fifo_lifo_id::text     = t.fifo_lifo_id::text
      WHERE t.return_header_id::bigint = $1
        AND t.stock_id::text = $2
        AND t.issue_detail_id::text = $3
        AND t.fifo_lifo_id::text = $4',
    v_target, v_source
  );
  EXECUTE sql USING v_header_id, v_stock_id, v_issue_detail_id, v_fifo_lifo_id INTO v_candidate;

  IF v_candidate <> 1 THEN
    RAISE EXCEPTION 'Safety stop: matched rows % (expected 1).', v_candidate;
  END IF;

  sql := format(
    'UPDATE %s t
        SET item_code           = s.item_code,
            item_name           = s.item_name,
            item_uom            = s.item_uom,
            from_warehouse_code = s.from_warehouse_code,
            to_warehouse_code   = s.to_warehouse_code
       FROM %s s
      WHERE t.return_header_id::bigint = $1
        AND t.stock_id::text = $2
        AND t.issue_detail_id::text = $3
        AND t.fifo_lifo_id::text = $4
        AND s.return_header_id::text = t.return_header_id::text
        AND s.stock_id::text         = t.stock_id::text
        AND s.issue_detail_id::text  = t.issue_detail_id::text
        AND s.fifo_lifo_id::text     = t.fifo_lifo_id::text',
    v_target, v_source
  );
  EXECUTE sql USING v_header_id, v_stock_id, v_issue_detail_id, v_fifo_lifo_id;
  GET DIAGNOSTICS v_updated = ROW_COUNT;

  IF v_updated <> 1 THEN
    RAISE EXCEPTION 'Safety stop: updated rows % (expected 1).', v_updated;
  END IF;

  RAISE NOTICE 'Fix done safely. updated_rows=%', v_updated;
END $$;

