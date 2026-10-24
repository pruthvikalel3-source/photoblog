// Exact-duplicate finder for your incoming photo folder.
// Usage: node scripts/find-duplicates.mjs ./incoming
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const root = process.argv[2];
if (!root) { console.error('Usage: node scripts/find-duplicates.mjs <folder>'); process.exit(1); }

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.heic', '.avif']);
const byHash = new Map();

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!IMAGE_EXT.has(name.slice(name.lastIndexOf('.')).toLowerCase())) continue;
    const h = createHash('sha256').update(readFileSync(p)).digest('hex');
    if (!byHash.has(h)) byHash.set(h, []);
    byHash.get(h).push(p);
  }
}
walk(root);

let dupes = 0;
for (const [hash, paths] of byHash) {
  if (paths.length > 1) { dupes++; console.log('DUPLICATE GROUP:'); paths.forEach((p) => console.log('  ' + p)); }
}
console.log(dupes ? `${dupes} duplicate group(s) found.` : 'No exact duplicates found.');
