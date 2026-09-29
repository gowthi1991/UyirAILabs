// Renders scripts/og/og.html to public/og.png (1200×630) with a local Chrome.
// Run manually when the card changes: `node scripts/build-og.mjs` (commit the PNG).
// Set CHROME_PATH if Chrome is not at the default macOS location.
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const chrome = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const page = pathToFileURL(resolve(root, 'scripts/og/og.html')).href;
const out = resolve(root, 'public/og.png');

execFileSync(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--allow-file-access-from-files',
  '--window-size=1200,630',
  '--virtual-time-budget=3000',
  `--screenshot=${out}`,
  page,
], { stdio: 'ignore' });
console.log(`OG image written to ${out}`);
