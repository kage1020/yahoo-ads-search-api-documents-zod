import { z } from 'zod';

export const retargetingListServiceTag = z.object({
  advancedSnippet: z.string().nullable()
}).nullable();

export type RetargetingListServiceTag = z.infer<typeof retargetingListServiceTag>;
