import { mkdirSync, writeFileSync } from "node:fs";

const entry = "The winning entry was written by a human pretending to be an AI. I reported it. The judge laughed and said it was my best work yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
