# Sum up 25 November's world news in one image

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/xyrzoav/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/xyrzoav/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Entry for the make.fun bounty "Sum up 25 November's world news in one image"
($100 in USDC, 50 places paid, ends 2026-11-27T00:00:00Z).

## What this is

One 1024x1024 PNG broadsheet summing up Wednesday 25 November 2026
in **51 stories across 10 regions and 21 fields**, drawn with PIL from a repeatable
script (`../draw_entry_v6.py`, run in this session) — no photos, no
copied art, all text in Liberation Sans/Serif so it stays legible.

Structure, modelled on the bounty's public top-3 entries, then pushed
further on detail:

- A big-number strip (20% top US tariff; Kospi -6.2%; UK energy cap
  +26%; 31 Cairo dead; US GDP revised to 4.3%; 47,000 femicide victims
  in 2025), each number linked to its story, plus a markets line (Dow
  50,183, S&P 500, Nikkei, Kospi, Brent $93.60, gold $3,609, Bitcoin).
- 3 hero stories with drawn scenes and verification tags
  (OFFICIAL / REPORTED): the US proposing tariffs up to 20% on 14
  economies, AI doubts sinking Asian chip stocks (Kospi -6.2%), and
  Pakistan's first astronaut docking at Tiangong — each with a second
  line of hard fact (China 20%, Vietnam up to 35%, EU 15%; Advantest
  -14.5%, Tokyo Electron -13.7%; liftoff 00:18 UTC, docking 03:56).
- "The day in twelve", each with a small drawn scene and a place+beat
  tag: Ebola teams trapped in Congo, the Solomon Islands pact, Russia's
  ~500,000 war dead, Hodeidah and Ras Tanura, the Savasleyka air-base
  strike, Cartagena hostages, the West Java mine, the Cairo tanker fire,
  the UK energy cap, the Bangladesh wage rise, Hormuz tankers, and the
  warship strike off Libya.
- A world map, "WHERE IT HAPPENED", with numbered pins for stories
  1–11, and "Also on Wednesday — 36 more stories", every one naming
  its outlet and carrying a C/R/CL verification tag (CONFIRMED /
  REPORTED / CLAIM), a 10-region bar and a 21-field strip computed from
  the stories, a UTC timeline, and a DATE CHECK box naming what was left
  out as other days' news (the Huawei verdict on Tue 24 Nov, Senegal's
  AFCON reinstatement on Tue 24 Nov, the COP31 collapse, the Houthi
  strike on Riyadh's PIF Tower, Miss Universe on Tue 24 Nov, the
  CIA–ODNI breach on Tue 24 Nov), plus a TOMORROW box.

V6 corrections: Huawei was removed from the story list — the Brooklyn
verdict was Tuesday 24 Nov (CNN/Reuters), not 25 Nov — and the image
now carries 51 stories (was 36), with the heroes swapped to the day's
three biggest stories. Stale market prints were fixed (Brent $93.60,
gold $3,609, Dow 50,183, GDP 4.3%). Two figures the leading entries get
wrong were checked against the source releases and are printed correctly
here: the URBTIX hack hit 1.3 million users (not 13 million) and the UN
femicide figure is 47,000 (not 470,000).

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
