# Sum up 25 November's world news in one image

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/xyrzoav/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/xyrzoav/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Entry for the make.fun bounty "Sum up 25 November's world news in one image"
($100 in USDC, 50 places paid, ends 2026-11-27T00:00:00Z).

## What this is

One 1024x1024 PNG front page summing up Wednesday 25 November 2026
in six stories, drawn with PIL from a repeatable script
(`../draw_entry.py`, run in this session) — no photos, no copied art,
all text in Liberation Sans so it stays legible.

1. **Middle East / Hormuz** — Two tankers hit mines in Hormuz.
2. **Science / Space** — Pakistan's first astronaut in orbit.
3. **Europe / Ukraine** — Ukraine hits Russian warship off Libya.
4. **Tech / Markets** — Nvidia falls as AI sell-off spreads.
5. **Americas / Colombia** — All hostages freed in Cartagena siege.
6. **Asia / Disaster** — Dozens trapped in flooded Indonesia mine.

Sources for each story are listed in `NEWS-SOURCES.md`. Every story
was first reported on 25 November 2026.

## How the program works

- `main.ts` — Node 22, standard library only. It copies `entry.png`
  to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`).
  It makes no network calls, so both grader runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
