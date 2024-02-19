import { z } from "zod";

const TrackedWordSchema = z.object({
  correct: z.string(),
  current: z.string(),
  index: z.number(),
});

export type TrackedWord = z.infer<typeof TrackedWordSchema>;
