// Two-Sentence Horror — entry program.
//
// Writes the winning two-sentence horror story to /output/entry.txt.
// Node 22, no dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";

// The story: exactly two sentences, 331 characters. A familiar weekly ritual
// (a late grandmother's recipe card) turns quietly dreadful in the second
// sentence — the cook is now listed among the ingredients. The horror lands
// without gore: the first sentence establishes comfort and routine, so the
// second sentence's reveal reframes everything that came before it.
const STORY =
  "My late grandmother's recipe card for Sunday soup sits in the tin on top of the fridge, stained and written in her looping hand, and I read it every week though I know it by heart. " +
  "This morning the card was on the kitchen table, the soup already simmering, and on the back, in her looping hand, my name is listed under ingredients.";

// Validation: 1-400 characters, not only whitespace, exactly two sentences
// (two periods, one ending each sentence).
if (STORY.length < 1 || STORY.length > 400) {
  throw new Error(`story length ${STORY.length} out of range 1-400`);
}
if (!STORY.trim()) {
  throw new Error("story is only whitespace");
}
const periodCount = [...STORY].filter((c) => c === ".").length;
if (periodCount !== 2) {
  throw new Error(`expected exactly 2 sentences, found ${periodCount} periods`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file must be byte-identical to the story.
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(`wrote /output/entry.txt (${STORY.length} chars, 2 sentences)`);
