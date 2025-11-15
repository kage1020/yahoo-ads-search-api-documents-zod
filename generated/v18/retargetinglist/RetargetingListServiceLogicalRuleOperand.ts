import { z } from 'zod';

export const RetargetingListServiceLogicalRuleOperand = z.object({
  targetListId: z.number().int().nullable()
}).nullable();

export type RetargetingListServiceLogicalRuleOperand = z.infer<typeof RetargetingListServiceLogicalRuleOperand>;
