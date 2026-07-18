#!/usr/bin/env python3
"""Build the semantic search index over the extracted casebook text.

Reads .index/*.txt (pdftotext output, form-feed separated pages), chunks the
text page by page, embeds every chunk with a small local model (model2vec,
no GPU or API key needed), and writes:

  .index/embeddings.npz   float32 matrix, one row per chunk
  .index/chunks.json      [{book, page, text}] aligned with the matrix rows

Run it once after adding or re-extracting a casebook:

  .venv/bin/python scripts/build_embeddings.py
"""

import json
import sys
from pathlib import Path

import numpy as np
from model2vec import StaticModel

ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / ".index"
MODEL_NAME = "minishlab/potion-base-8M"

# Pages shorter than this are usually cover pages or dividers; fold them
# into the next page instead of indexing them alone.
MIN_CHARS = 200
# Cap per chunk so one dense page does not dominate; model handles long
# input fine, this just keeps chunks.json reasonable.
MAX_CHARS = 4000


def page_chunks(text: str):
    """Yield (page_number, chunk_text) for one book's extracted text."""
    pages = text.split("\f")
    buf, buf_start = "", 1
    for i, page in enumerate(pages, start=1):
        page = page.strip()
        if not page:
            continue
        if not buf:
            buf_start = i
        buf = (buf + "\n" + page).strip()
        if len(buf) >= MIN_CHARS:
            yield buf_start, buf[:MAX_CHARS]
            buf = ""
    if buf:
        yield buf_start, buf[:MAX_CHARS]


def main():
    txts = sorted(INDEX.glob("*.txt"))
    if not txts:
        sys.exit(f"no extracted text found in {INDEX}")

    print(f"loading {MODEL_NAME} ...")
    model = StaticModel.from_pretrained(MODEL_NAME)

    chunks = []
    for txt in txts:
        book = txt.stem
        n = 0
        for page, chunk in page_chunks(txt.read_text(errors="ignore")):
            chunks.append({"book": book, "page": page, "text": chunk})
            n += 1
        print(f"  {book}: {n} chunks")

    print(f"embedding {len(chunks)} chunks ...")
    vectors = model.encode([c["text"] for c in chunks]).astype(np.float32)
    # Normalize once so search is a plain dot product.
    vectors /= np.linalg.norm(vectors, axis=1, keepdims=True) + 1e-12

    np.savez_compressed(INDEX / "embeddings.npz", vectors=vectors)
    (INDEX / "chunks.json").write_text(json.dumps(chunks))
    print(f"wrote {INDEX / 'embeddings.npz'} and chunks.json")


if __name__ == "__main__":
    main()
