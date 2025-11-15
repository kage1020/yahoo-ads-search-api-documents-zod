import { z } from 'zod';

import { retargetingListServiceRuleItem } from './RetargetingListServiceRuleItem';

export const retargetingListServiceRuleGroup = z.object({
  ruleItems: z.array(retargetingListServiceRuleItem).nullable()
}).nullable();

export type RetargetingListServiceRuleGroup = z.infer<typeof retargetingListServiceRuleGroup>;
