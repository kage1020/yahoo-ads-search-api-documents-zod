import { z } from 'zod';

import { RetargetingListServiceRuleItem } from './RetargetingListServiceRuleItem';

export const RetargetingListServiceRuleGroup = z.object({
  ruleItems: z.array(RetargetingListServiceRuleItem).nullable()
}).nullable();

export type RetargetingListServiceRuleGroup = z.infer<typeof RetargetingListServiceRuleGroup>;
