// news-image-20261125 entry (Node 22, standard library only).
// The image is drawn in advance and shipped beside this file as entry.png;
// this program copies it, unchanged, to the grader's output directory.
// It makes no network calls and writes the same bytes on every run.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Create the output directory if the grader's sandbox has not made it yet.
mkdirSync(outputDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outputDir, 'entry.png'),
);
