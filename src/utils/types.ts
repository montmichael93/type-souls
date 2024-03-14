import { z } from "zod";

const MessagesSchema = z.object({
  id: z.number(),
  contents: z.string(),
});

export type playerMessages = z.infer<typeof MessagesSchema>;

const ReviewSchema = z.object({
  id: z.number(),
  playerName: z.string(),
  level: z.number(),
  contents: z.string(),
});

export type playerReviews = z.infer<typeof ReviewSchema>;

const TrackedWordSchema = z.object({
  correct: z.string(),
  current: z.string(),
  index: z.number(),
});

export type TrackedWord = z.infer<typeof TrackedWordSchema>;

const PlayerSchema = z.object({
  id: z.number(),
  name: z.string(),
  level: z.number(),
  souls: z.number(),
  email: z.string(),
  password: z.string(),
  leftReview: z.boolean(),
});

export type GamePlayers = z.infer<typeof PlayerSchema>;

const BossDataSchema = z.object({
  id: z.number(),
  name: z.string(),
  levelUp: z.number(),
  reward: z.number(),
  bossMenuImage: z.string(),
  combatLocation: z.string(),
  combatImage: z.string(),
  victoryImage: z.string(),
  defeatImage: z.string(),
  bossText: z.number(),
  lore: z.string(),
  bossThemeMusic: z.string(),
});

export type BossData = z.infer<typeof BossDataSchema>;

const ActiveComponentSchema = z.union([
  z.literal("loading"),
  z.literal("landing-page"),
  z.literal("sign-up"),
  z.literal("log-in"),
  z.literal("review-page"),
  z.literal("abyss"),
  z.literal("main-menu"),
  z.literal("messages"),
  z.literal("leaderBoard"),
  z.literal("review"),
  z.literal("boss-menu"),
  z.literal("combat"),
  z.literal("combat-outcome"),
]);

export type ActiveComponent = z.infer<typeof ActiveComponentSchema>;
