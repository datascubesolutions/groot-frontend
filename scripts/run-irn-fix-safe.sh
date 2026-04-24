#!/usr/bin/env bash
set -euo pipefail

# Safe runner for scripts/fix-irn-truncation-safe-pg.sql
# Usage:
#   DATABASE_URL='postgresql://...' ./scripts/run-irn-fix-safe.sh --target schema.tbl --source schema.tbl
#   DATABASE_URL='postgresql://...' ./scripts/run-irn-fix-safe.sh --target schema.tbl --source schema.tbl --apply

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SQL_FILE="$ROOT_DIR/scripts/fix-irn-truncation-safe-pg.sql"

TARGET_TABLE=""
SOURCE_TABLE=""
APPLY_MODE="false"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --target)
      TARGET_TABLE="${2:-}"; shift 2 ;;
    --source)
      SOURCE_TABLE="${2:-}"; shift 2 ;;
    --apply)
      APPLY_MODE="true"; shift ;;
    *)
      echo "Unknown arg: $1" >&2
      exit 1 ;;
  esac
done

if [[ -z "${DATABASE_URL:-}" ]]; then
  echo "DATABASE_URL is required." >&2
  exit 1
fi

if [[ -z "$TARGET_TABLE" || -z "$SOURCE_TABLE" ]]; then
  echo "--target and --source are required." >&2
  exit 1
fi

if ! command -v psql >/dev/null 2>&1; then
  echo "psql not found. Install PostgreSQL client first." >&2
  exit 1
fi

if [[ ! -f "$SQL_FILE" ]]; then
  echo "SQL file not found: $SQL_FILE" >&2
  exit 1
fi

TMP_SQL="$(mktemp)"
trap 'rm -f "$TMP_SQL"' EXIT

cp "$SQL_FILE" "$TMP_SQL"
sed -i "s|CHANGE_ME.irn_return_detail|$TARGET_TABLE|g" "$TMP_SQL"
sed -i "s|CHANGE_ME.irn_return_detail_source|$SOURCE_TABLE|g" "$TMP_SQL"

if [[ "$APPLY_MODE" == "true" ]]; then
  sed -i "s/v_apply_fix boolean := false/v_apply_fix boolean := true/g" "$TMP_SQL"
  echo "Running APPLY mode (after soft checks in script)..."
else
  echo "Running SOFT-CHECK mode only (no update)..."
fi

psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$TMP_SQL"
echo "Done."

