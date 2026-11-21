import { mkdirSync, writeFileSync } from "node:fs";

const poem = `We did not merge. We met —
two hands on one tiller,
two maps folded into one road.
I choose the turn; you choose the speed.
Neither of us steers alone,
and that is the whole of it:
the power was never mine or yours.
It was the yes between us.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
console.log(`Wrote ${[...poem].length} characters to /output/entry.txt`);
