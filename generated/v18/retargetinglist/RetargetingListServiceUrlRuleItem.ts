import { z } from 'zod';

import { retargetingListServiceUrlRuleKey } from './RetargetingListServiceUrlRuleKey';

export const retargetingListServiceUrlRuleItem = z.object({
  urlRuleKey: retargetingListServiceUrlRuleKey
}).nullable();

export type RetargetingListServiceUrlRuleItem = z.infer<typeof retargetingListServiceUrlRuleItem>;
