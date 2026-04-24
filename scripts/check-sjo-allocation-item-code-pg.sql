-- PostgreSQL: check allocation for one item code against SJO reference
-- Reference pair provided:
--   inward_txn_id = 27913903  (INT_SITE_TRF_INWARD)
--   issue_txn_id  = 27913874  (INT_SITE_TRF_ISSUE)
--   item_code     = 'L-COM 0094-C'
--   stock_id      = 97381
--   fifo_lifo_id  = 1114142175980617821

-- =============================================================================
-- 1) Discover candidate tables/columns first
--    Run this and identify the real tables for transaction and allocation data.
-- =============================================================================
SELECT table_schema, table_name, column_name
FROM information_schema.columns
WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
  AND column_name IN (
    'id',
    'type',
    'sub_type',
    'stock_id',
    'issue_detail_id',
    'fifo_lifo_id',
    'item_code',
    'item_uom',
    'qty',
    'allocated_qty',
    'allocated_quantity',
    'allocation_qty',
    'sjo_id',
    'sjo_no',
    'sjo_number',
    'created_at'
  )
ORDER BY table_schema, table_name, column_name;

-- =============================================================================
-- 2) CONFIG + check
--    Set table names found in step 1, then run.
-- =============================================================================
DO $$
DECLARE
  v_inward_id   bigint := 27913903;
  v_issue_id    bigint := 27913874;
  v_item_code   text   := 'L-COM 0094-C';
  v_stock_id    bigint := 97381;
  v_fifo_lifo   bigint := 1114142175980617821;

  -- CHANGE these two to your real tables.
  -- v_txn: table that stores inward/issue transaction rows.
  -- v_alloc: table that stores allocation rows against transaction/SJO.
  v_txn   text := 'CHANGE_ME.transaction_table';
  v_alloc text := 'CHANGE_ME.allocation_table';

  sql text;
BEGIN
  IF v_txn LIKE 'CHANGE_ME%' OR v_alloc LIKE 'CHANGE_ME%' THEN
    RAISE EXCEPTION 'Set v_txn and v_alloc to real schema.table names from step 1.';
  END IF;

  -- A) Compare the two transaction rows side-by-side.
  sql := format(
    $q$
    SELECT
      t.id,
      t.type,
      t.sub_type,
      t.stock_id,
      t.issue_detail_id,
      t.fifo_lifo_id,
      t.item_code,
      t.item_uom,
      t.qty,
      t.created_at
    FROM %1$s t
    WHERE t.id IN (%2$s, %3$s)
    ORDER BY t.id
    $q$,
    v_txn, v_issue_id, v_inward_id
  );
  RAISE NOTICE 'Run txn compare SQL: %', sql;

  -- B) Pull allocation rows for this pair, filtered by item and stock.
  -- NOTE: adjust join/filter columns if your allocation table uses different names.
  sql := format(
    $q$
    SELECT
      a.*,
      CASE
        WHEN a.transaction_id::bigint = %2$s THEN 'ISSUE_REF'
        WHEN a.transaction_id::bigint = %3$s THEN 'INWARD_REF'
        ELSE 'OTHER'
      END AS ref_side
    FROM %1$s a
    WHERE (
        a.transaction_id::bigint IN (%2$s, %3$s)
        OR a.reference_transaction_id::bigint IN (%2$s, %3$s)
      )
      AND (a.item_code::text = %4$L OR a.item_code IS NULL)
      AND (a.stock_id::bigint = %5$s OR a.stock_id IS NULL)
      AND (a.fifo_lifo_id::bigint = %6$s OR a.fifo_lifo_id IS NULL)
    ORDER BY a.created_at, a.id
    $q$,
    v_alloc, v_issue_id, v_inward_id, v_item_code, v_stock_id, v_fifo_lifo
  );
  RAISE NOTICE 'Run allocation SQL: %', sql;

  -- C) Aggregate allocation qty by SJO to verify "in front of SJO" values.
  sql := format(
    $q$
    SELECT
      coalesce(a.sjo_no::text, a.sjo_number::text, a.sjo_id::text, 'NO_SJO') AS sjo_ref,
      sum(
        coalesce(
          a.allocated_qty::numeric,
          a.allocated_quantity::numeric,
          a.allocation_qty::numeric,
          0
        )
      ) AS total_alloc_qty,
      count(*) AS rows_count
    FROM %1$s a
    WHERE (
        a.transaction_id::bigint IN (%2$s, %3$s)
        OR a.reference_transaction_id::bigint IN (%2$s, %3$s)
      )
      AND (a.item_code::text = %4$L OR a.item_code IS NULL)
      AND (a.stock_id::bigint = %5$s OR a.stock_id IS NULL)
      AND (a.fifo_lifo_id::bigint = %6$s OR a.fifo_lifo_id IS NULL)
    GROUP BY 1
    ORDER BY 1
    $q$,
    v_alloc, v_issue_id, v_inward_id, v_item_code, v_stock_id, v_fifo_lifo
  );
  RAISE NOTICE 'Run SJO allocation summary SQL: %', sql;
END $$;

