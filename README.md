# Casebooks

I built this for my girlfriend while she recruits for MBB consulting, and she uses it regularly. It collects 20 MBA casebooks in one place and makes them searchable, so finding a case by industry or concept takes seconds instead of flipping PDFs. It also includes Case Math Drill, a web app for practicing case interview mental math with per-topic progress tracking.

Casebook source: [Hacking the Case Interview](https://www.hackingthecaseinterview.com/pages/mba-consulting-casebooks). The full list of books and what each contributes is in [COVERAGE.md](COVERAGE.md).

## Search

Keyword search across all books:

```
./casesearch "market entry"             # all books
./casesearch "profitability" Wharton    # one school
```

Semantic search, for when you don't know the exact words:

```
./caseask "market sizing cases about airlines"
./caseask "private equity due diligence on a healthcare company" 5
```

Both print `School p<PDF page>` so you can jump straight to the case. `caseask` runs a small embedding model locally, no API keys. The first run sets up its Python env and builds the index (a few minutes), after that queries are instant.

Render exhibit pages to images:

```
./render-pages Columbia_2021 144 146
```

## Getting the books

PDFs are not committed. To rebuild the library from scratch:

```
./download_casebooks.sh        # downloads the 20 PDFs into casebooks/
./scripts/extract_text.sh      # extracts text into .index/ (needs pdftotext)
```

## Case Math Drill

Live at [casedrills.vercel.app](https://casedrills.vercel.app). Timed sessions (5, 15, or 30 minutes) of case interview mental math across 20 topics: multiplication, big division, fractions, reverse percentages, margins, break-even, market sizing, market share, CAGR, NPV, churn, LTV and more. Every question has a tolerance-aware answer check, a method hint, and a per-question countdown. Per-topic accuracy is saved in the browser, no account needed.

The whole app is one file, `app/index.html`. No build, no backend. Open it locally or host it anywhere.

## Layout

- `casebooks/` PDFs by school (not committed, use the download script)
- `.index/` extracted text plus the embeddings index (not committed)
- `app/index.html` Case Math Drill, a single self-contained page
- `scripts/` text extraction and embeddings build
- `case_interview_math.md` math reference distilled from all 20 books
