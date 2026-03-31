#!/usr/bin/env bash
set -euo pipefail

TARGET_ENVIRONMENT="${1:-}"
if [[ -z "$TARGET_ENVIRONMENT" ]]; then
  echo "Usage: ./scripts/deploy-static.sh <staging|production>"
  exit 1
fi

if [[ ! -d dist ]]; then
  echo "dist folder not found. Run npm run build first."
  exit 1
fi

echo "Preparing deployment for environment: $TARGET_ENVIRONMENT"
echo "This is a sample deployment script."
echo "Replace this section with your real deployment command, for example:"
echo "  rsync -avz dist/ user@server:/var/www/$TARGET_ENVIRONMENT/"
echo "  aws s3 sync dist/ s3://your-bucket-$TARGET_ENVIRONMENT/"
echo "  az storage blob upload-batch ..."
