import { z } from 'zod';

export const RetargetingListServiceTag = z.object({
  advancedSnippet: z.string().nullable()
}).nullable();

export type RetargetingListServiceTag = z.infer<typeof RetargetingListServiceTag>;
