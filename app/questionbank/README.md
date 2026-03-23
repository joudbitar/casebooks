# Question bank layout

- **`core/`** — `rng.js` (rand, pick, fmt), `html.js` (escapeHtml for catalog UI), `questionDifficulty.js` (optional `QUESTION_DIFFICULTY` tiers for per-question chips in the drill UI; XP still uses topic-level difficulty).
- **`catalog/`** — `sections.js` defines the roadmap sections and which topic ids appear in each.
- **`shared/generators/`** — Reusable drill generators grouped by domain (`profitability/`, `margins/`, `finance/`, `market/`). Topics import these when they share the same math.
- **`topics/<topic_id>/`** — One folder per catalog topic (matches Supabase `category_id`).
  - **`index.js`** — Topic metadata (`rank`, `name`, `difficulty`, `desc`, `target`) and which generators to use.
  - **`generators/`** — *(optional subfolder)* Topic-specific generators only (e.g. `mental_math/generators/` has times tables, large multiply, etc.).

To add a **new topic**: create `topics/<new_id>/index.js`, register it in `registry.js`, and add its id to a section in `catalog/sections.js`.

To add drills under an existing topic: add a generator file under that topic’s `generators/` (or under `shared/generators/` if multiple topics will use it), export the function, and list it in the topic’s `index.js`.

Optional on each question object: **`questionDifficulty`** — `'easy' | 'medium' | 'hard'` (see `core/questionDifficulty.js`). If omitted, the drill shows the topic’s catalog label in a neutral “fallback” chip.
