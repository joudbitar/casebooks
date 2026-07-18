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

Live at [app-snowy-pi-90.vercel.app](https://app-snowy-pi-90.vercel.app). Drills mental math by topic (percentages, break-even, NPV, market sizing and more), grades answers, and tracks progress per topic. Works as a guest with localStorage, or with an account for cross-device progress.

To self-host: create a [Supabase](https://supabase.com) project, run the two migrations in `supabase/migrations/` in the SQL editor, turn off email confirmation under Authentication > Providers > Email, then copy `app/config.example.js` to `app/config.js` and fill in your project URL and anon key.

## Layout

- `casebooks/` PDFs by school (not committed, use the download script)
- `.index/` extracted text plus the embeddings index (not committed)
- `app/` Case Math Drill, entry at `app/main.js`, drills under `app/questionbank/`
- `scripts/` text extraction and embeddings build
- `case_interview_math.md` math reference distilled from all 20 books
