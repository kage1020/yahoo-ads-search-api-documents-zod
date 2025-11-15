import { z } from 'zod';

import { RetargetingListServiceCustomKeyRuleItem } from './RetargetingListServiceCustomKeyRuleItem';
import { RetargetingListServiceRuleOperator } from './RetargetingListServiceRuleOperator';
import { RetargetingListServiceRuleType } from './RetargetingListServiceRuleType';
import { RetargetingListServiceUrlRuleItem } from './RetargetingListServiceUrlRuleItem';

export const RetargetingListServiceRuleItem = z.object({
  customKeyRuleItem: RetargetingListServiceCustomKeyRuleItem,
  ruleOperator: RetargetingListServiceRuleOperator,
  ruleType: RetargetingListServiceRuleType,
  urlRuleItem: RetargetingListServiceUrlRuleItem,
  value: z.string().nullable()
}).nullable();

export type RetargetingListServiceRuleItem = z.infer<typeof RetargetingListServiceRuleItem>;
