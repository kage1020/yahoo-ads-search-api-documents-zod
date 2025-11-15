import { z } from 'zod';

import { retargetingListServiceLogicalCondition } from './RetargetingListServiceLogicalCondition';
import { retargetingListServiceLogicalRuleOperand } from './RetargetingListServiceLogicalRuleOperand';

export const retargetingListServiceLogicalGroup = z.object({
  logicalCondition: retargetingListServiceLogicalCondition,
  logicalOperand: z.array(retargetingListServiceLogicalRuleOperand).nullable()
}).nullable();

export type RetargetingListServiceLogicalGroup = z.infer<typeof retargetingListServiceLogicalGroup>;
