import { z } from 'zod';

export const RetargetingListServiceCustomKeyRuleItem = z.object({
  textKey: z.string().nullable()
}).nullable();

export type RetargetingListServiceCustomKeyRuleItem = z.infer<typeof RetargetingListServiceCustomKeyRuleItem>;
