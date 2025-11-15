import { z } from 'zod';

import { RetargetingListServiceUrlRuleKey } from './RetargetingListServiceUrlRuleKey';

export const RetargetingListServiceUrlRuleItem = z.object({
  urlRuleKey: RetargetingListServiceUrlRuleKey
}).nullable();

export type RetargetingListServiceUrlRuleItem = z.infer<typeof RetargetingListServiceUrlRuleItem>;
