# Sum up 25 November's world news in one image

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/xyrzoav/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/xyrzoav/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Entry for the make.fun bounty "Sum up 25 November's world news in one image"
($100 in USDC, 50 places paid, ends 2026-11-27T00:00:00Z).

## What this is

One 1024x1024 PNG broadsheet summing up Wednesday 25 November 2026
in **35 stories across 6 regions**, drawn with PIL from a repeatable
script (`../draw_entry_v2.py`, run in this session) — no photos, no
copied art, all text in Liberation Sans/Serif so it stays legible.

Structure, modelled on the bounty's public top-3 entries:

- A big-number strip (5,775 Ebola deaths; 490,334 Russian war dead;
  36% Bangladesh wage rise; 259 House seats; Nikkei -2.76%; €115bn).
- 3 hero stories with drawn scenes: Ebola teams trapped in Congo,
  Australia–Solomon Islands security pact, Russia's ~500,000 war dead.
- "The day in eight": Hormuz tankers, Shenzhou-24/Pakistan astronaut,
  Ukraine's warship strike off Libya, Nvidia sell-off, Cartagena
  hostages, Indonesia mine, Huawei verdict, Hodeidah bombing.
- "Also on Wednesday — 24 more stories", a UTC timeline, a world-region
  count, and a DATE CHECK box naming what was left out as other days'
  news (Sooryavanshi's 204 on Tue 24 Nov, the COP31 collapse, the
  Houthi strike on Riyadh's PIF Tower).

Sources for each story are listed in `NEWS-SOURCES.md`. Every story
was first reported, or was still developing, on 25 November 2026.

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
