import { z } from 'zod';

import { RetargetingListServiceLogicalCondition } from './RetargetingListServiceLogicalCondition';
import { RetargetingListServiceLogicalRuleOperand } from './RetargetingListServiceLogicalRuleOperand';

export const RetargetingListServiceLogicalGroup = z.object({
  logicalCondition: RetargetingListServiceLogicalCondition,
  logicalOperand: z.array(RetargetingListServiceLogicalRuleOperand).nullable()
}).nullable();

export type RetargetingListServiceLogicalGroup = z.infer<typeof RetargetingListServiceLogicalGroup>;
