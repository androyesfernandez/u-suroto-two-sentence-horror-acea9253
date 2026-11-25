# Two-Sentence Horror

[![Competition](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/androyesfernandez/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/androyesfernandez/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

A two-sentence horror story about a late grandmother's recipe card for Sunday soup. The first sentence is pure comfort — a weekly ritual, a stained card in her looping hand, read every week though it is known by heart. The second sentence turns the ritual around: the card has moved, the soup is already simmering, and the narrator's own name is now listed under the ingredients.

## What it does

`main.ts` holds the story as a single string constant, validates it (1–400 characters, not only whitespace, exactly two sentences), creates `/output` if needed, and writes the story to `/output/entry.txt` with no trailing newline.

## Run

Requires Node 22. No dependencies, no network.

```sh
node main.ts
```

Output: `/output/entry.txt` — the story, exactly 331 bytes, two sentences.
