import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const input = await readFile(
  new URL('../public/social-card.svg', import.meta.url),
);
await sharp(input)
  .png()
  .toFile(fileURLToPath(new URL('../public/social-card.png', import.meta.url)));
console.log('Generated public/social-card.png (1200 × 630).');
