import { z } from 'zod';

export const retargetingListServiceLogicalRuleOperand = z.object({
  targetListId: z.number().int().nullable()
}).nullable();

export type RetargetingListServiceLogicalRuleOperand = z.infer<typeof retargetingListServiceLogicalRuleOperand>;
