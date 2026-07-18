# Casebooks

I built this for my girlfriend while she recruits for MBB consulting, and she uses it regularly. It collects 20 MBA casebooks in one place and makes them searchable, so finding a case by industry or concept takes seconds instead of flipping PDFs. It also includes [Case Math Drill](https://casedrills.vercel.app), a web app for practicing case interview mental math.

Casebook source: [Hacking the Case Interview](https://www.hackingthecaseinterview.com/pages/mba-consulting-casebooks). The full list of books and what each contributes is in [COVERAGE.md](COVERAGE.md).

## Search

Keyword search across all books:

```
./casesearch "market entry"             # all books
./casesearch "profitability" Wharton    # one school
```

Semantic search when you don't know the exact words:

```
./caseask "market sizing cases about airlines"
./caseask "private equity due diligence on a healthcare company" 5
```

Both print the school and PDF page. `caseask` runs a small embedding model locally. The first run sets up a Python env and builds the index, which takes a few minutes.

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

Live at [casedrills.vercel.app](https://casedrills.vercel.app). Timed drill sessions for case interview mental math, with 20 topics covering multiplication, fractions, percentages, margins, break-even, market sizing, CAGR, NPV, churn and LTV. Each question has a time limit and a method hint. Per-topic accuracy is saved in the browser.

## Layout

- `casebooks/` PDFs by school (not committed, use the download script)
- `.index/` extracted text and the embeddings index (not committed)
- `app/index.html` the Case Math Drill app
- `scripts/` text extraction and embeddings build
- `case_interview_math.md` math notes from all 20 books
