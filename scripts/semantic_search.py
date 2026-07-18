#!/usr/bin/env python3
"""Semantic search over the casebook index. Used by ./caseask."""

import json
import os
import re
import sys
from pathlib import Path

os.environ["HF_HUB_DISABLE_PROGRESS_BARS"] = "1"

import numpy as np
from model2vec import StaticModel

ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / ".index"
MODEL_NAME = "minishlab/potion-base-8M"


def snippet(text: str, query: str, width: int = 160) -> str:
    """Pick the line in the chunk most related to the query terms."""
    terms = [t for t in re.findall(r"[a-z]+", query.lower()) if len(t) > 3]
    best, best_score = "", -1
    for line in text.splitlines():
        line = line.strip()
        if len(line) < 15:
            continue
        score = sum(1 for t in terms if t in line.lower())
        if score > best_score:
            best, best_score = line, score
    return (best[:width] + "...") if len(best) > width else best


def main():
    if len(sys.argv) < 2:
        sys.exit('usage: caseask "what you are looking for" [top_k]')
    query = sys.argv[1]
    top_k = int(sys.argv[2]) if len(sys.argv) > 2 else 10

    emb_file = INDEX / "embeddings.npz"
    if not emb_file.exists():
        sys.exit("no embeddings yet: run scripts/build_embeddings.py first")

    vectors = np.load(emb_file)["vectors"]
    chunks = json.loads((INDEX / "chunks.json").read_text())

    model = StaticModel.from_pretrained(MODEL_NAME)
    q = model.encode([query]).astype(np.float32)[0]
    q /= np.linalg.norm(q) + 1e-12

    scores = vectors @ q
    order = np.argsort(-scores)

    # Show at most 2 hits per book so one book does not fill the list.
    shown, per_book = 0, {}
    for i in order:
        c = chunks[i]
        if per_book.get(c["book"], 0) >= 2:
            continue
        per_book[c["book"]] = per_book.get(c["book"], 0) + 1
        print(f"{c['book']:<32} p{c['page']:<4} {scores[i]:.2f}  {snippet(c['text'], query)}")
        shown += 1
        if shown >= top_k:
            break


if __name__ == "__main__":
    main()
