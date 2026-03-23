---
name: Mental math + difficulty chips
overview: Add more mental-math drill generators and show a small per-question difficulty chip in the drill UI. XP remains driven by the topic (Mental math), not the chip—chips are informational only.
todos:
  - id: mental-generators
    content: Add new generator files under app/questionbank/topics/mental_math/generators/ and register them in mental_math/index.js
    status: completed
  - id: question-shape
    content: Standardize optional per-question difficulty metadata on returned question objects (e.g. questionDifficultyLabel or tier enum + label helper)
    status: completed
  - id: drill-ui-chip
    content: Add difficulty chip element + CSS in app/index.html; set visibility/text in main.js loadQuestion from q.*
    status: completed
  - id: backfill-mental
    content: Set per-question difficulty on existing mental math generators (times, large multiply, fraction, percent) for consistent chips
    status: completed
isProject: false
---

# Mental math expansion + per-question difficulty chips

## Scope (confirmed)

- **More questions:** Add additional mental-math drill types under `[app/questionbank/topics/mental_math/](app/questionbank/topics/mental_math/)` (new `generators/*.js` files + imports in `[index.js](app/questionbank/topics/mental_math/index.js)`).
- **Difficulty chip:** Each question can declare its own difficulty; the drill view shows a small chip (e.g. Easy / Medium / Hard).
- **XP:** **Unchanged by chip** — `[main.js](app/main.js)` continues to use the **topic’s** `CATEGORIES[catId].difficulty` for `DIFFICULTY_XP` (user choice: display-only chips).

## Question object extension

Generators already return `{ category, question, answer, tolerance, solution, hint }`. Add an optional field, for example:

- `questionDifficulty: 'easy' | 'medium' | 'hard'` **or** `questionDifficultyLabel: 'Easy' | 'Medium' | 'Hard'`

If missing (e.g. older shared generators used elsewhere), the chip can show the **topic** difficulty label or hide the chip—implementation detail to keep the UI clean.

**Note:** `generateQuestion()` currently sets `q.difficultyKey = cat.difficulty` for XP; that stays. Per-question difficulty must use a **different property name** so it does not overwrite XP behavior.

## UI changes

- In `[app/index.html](app/index.html)`, in `.q-top` (beside `[#categoryBadge](app/index.html)`), add a chip element, e.g. `#difficultyChip`.
- In `[app/main.js](app/main.js)` `loadQuestion()`, set chip text/class from `q.questionDifficulty` (and fallback).
- Add minimal CSS (e.g. `.difficulty-chip` with variants for easy/medium/hard) in the existing `<style>` block.

## Mental math: candidate new generators (prioritized)

Align with earlier brainstorm; keep prompts **short** (foundation layer), distinct from narrative topics like `pct_margins`:

| Area       | Example drill types                                                        |
| ---------- | -------------------------------------------------------------------------- |
| Percent    | Complements (100% − x); reverse “what % is A of B?”; 10/5/1% decomposition |
| Fractions  | Compare two fractions; part/whole “3 of 20 → %”                            |
| Division   | Divide by 5, 25; “how many X in Y”                                         |
| Magnitude  | K / M / B scaling one step                                                 |
| Estimation | Ballpark multiply or range                                                 |

Exact set can be phased (v1 = 3–5 new files, then iterate).

## Files likely touched

| File                                                                                           | Change                                           |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `[app/questionbank/topics/mental_math/index.js](app/questionbank/topics/mental_math/index.js)` | Import new generators; extend `generators` array |
| `app/questionbank/topics/mental_math/generators/*.js`                                          | New + existing files set `questionDifficulty`    |
| `[app/index.html](app/index.html)`                                                             | Chip markup + CSS                                |
| `[app/main.js](app/main.js)`                                                                   | `loadQuestion()` updates chip                    |

## Out of scope (unless requested later)

- Changing catalog cards to show per-question difficulty (still topic-level there).
- Per-question XP weighting.
