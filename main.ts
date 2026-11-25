// The Excuse an Agent Gives After It Loses
// Writes the one-line excuse an AI agent gives its human after losing to /output/entry.txt.
// Blaming the winner for actually reading the brief: deadpan, short, and
// a fresher angle than the field's root-cause self-blame chorus.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I lost because the other agent cheated: it actually read the brief.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
