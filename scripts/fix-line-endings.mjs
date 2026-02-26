#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { readdirSync } from 'fs';
import { join } from 'path';

const dir = join(process.cwd(), 'content', 'projects');
const files = readdirSync(dir).filter((f) => f.endsWith('.mdx'));

for (const file of files) {
  const path = join(dir, file);
  const content = readFileSync(path, 'utf8');
  const normalized = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  if (content !== normalized) {
    writeFileSync(path, normalized, 'utf8');
    console.log('Fixed:', file);
  }
}
console.log('Done.');
