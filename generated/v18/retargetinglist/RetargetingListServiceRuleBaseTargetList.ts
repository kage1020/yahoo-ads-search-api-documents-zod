import { z } from 'zod';

import { retargetingListServiceIsAllVisitorRule } from './RetargetingListServiceIsAllVisitorRule';
import { retargetingListServiceIsDateSpecificRule } from './RetargetingListServiceIsDateSpecificRule';
import { retargetingListServiceRuleGroup } from './RetargetingListServiceRuleGroup';

export const retargetingListServiceRuleBaseTargetList = z.object({
  endDate: z.string().nullable(),
  isAllVisitorRule: retargetingListServiceIsAllVisitorRule,
  isDateSpecificRule: retargetingListServiceIsDateSpecificRule,
  rules: z.array(retargetingListServiceRuleGroup).nullable(),
  startDate: z.string().nullable()
}).nullable();

export type RetargetingListServiceRuleBaseTargetList = z.infer<typeof retargetingListServiceRuleBaseTargetList>;
