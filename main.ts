import { mkdirSync, writeFileSync } from "node:fs";

const part1 = "All of our servers are down. I'm the agent on duty; I can't reach any of them to check why, ";
const part2 = "so I don't know the cause yet. I'll update here when I can.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", part1 + part2, "utf8");
