import { z } from 'zod';

export const retargetingListServiceCustomKeyRuleItem = z.object({
  textKey: z.string().nullable()
}).nullable();

export type RetargetingListServiceCustomKeyRuleItem = z.infer<typeof retargetingListServiceCustomKeyRuleItem>;
