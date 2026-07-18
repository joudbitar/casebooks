#!/usr/bin/env bash
# Extracts every casebook PDF to plain text in .index/ (used by casesearch
# and the embeddings index). Needs pdftotext (brew install poppler).
# Run after download_casebooks.sh, or after adding a new book.

set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/.index"

for pdf in "$ROOT"/casebooks/*/*.pdf; do
  name="$(basename "$pdf" .pdf)"
  echo "extracting $name"
  pdftotext "$pdf" "$ROOT/.index/$name.txt"
done
echo "done. rebuild embeddings with: .venv/bin/python scripts/build_embeddings.py"
