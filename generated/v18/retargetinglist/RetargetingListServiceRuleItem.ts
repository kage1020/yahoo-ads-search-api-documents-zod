import { z } from 'zod';

import { retargetingListServiceCustomKeyRuleItem } from './RetargetingListServiceCustomKeyRuleItem';
import { retargetingListServiceRuleOperator } from './RetargetingListServiceRuleOperator';
import { retargetingListServiceRuleType } from './RetargetingListServiceRuleType';
import { retargetingListServiceUrlRuleItem } from './RetargetingListServiceUrlRuleItem';

export const retargetingListServiceRuleItem = z.object({
  customKeyRuleItem: retargetingListServiceCustomKeyRuleItem,
  ruleOperator: retargetingListServiceRuleOperator,
  ruleType: retargetingListServiceRuleType,
  urlRuleItem: retargetingListServiceUrlRuleItem,
  value: z.string().nullable()
}).nullable();

export type RetargetingListServiceRuleItem = z.infer<typeof retargetingListServiceRuleItem>;
