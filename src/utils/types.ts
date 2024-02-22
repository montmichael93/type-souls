import { z } from "zod";

const TrackedWordSchema = z.object({
  correct: z.string(),
  current: z.string(),
  index: z.number(),
});

export type TrackedWord = z.infer<typeof TrackedWordSchema>;

const BossData = z.object({
  id: z.number(),
  name: z.string(),
  levelUp: z.number(),
  reward: z.number(),
  bossMenuImage: z.string(),
  combatImage: z.string(),
  victoryImage: z.string(),
  defeatImage: z.string(),
  bossText: z.string(),
  bossThemeMusic: z.string(),
});

export type BossData = z.infer<typeof BossData>;
