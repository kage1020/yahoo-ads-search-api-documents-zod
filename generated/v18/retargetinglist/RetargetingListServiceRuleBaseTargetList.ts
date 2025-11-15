import { z } from 'zod';

import { RetargetingListServiceIsAllVisitorRule } from './RetargetingListServiceIsAllVisitorRule';
import { RetargetingListServiceIsDateSpecificRule } from './RetargetingListServiceIsDateSpecificRule';
import { RetargetingListServiceRuleGroup } from './RetargetingListServiceRuleGroup';

export const RetargetingListServiceRuleBaseTargetList = z.object({
  endDate: z.string().nullable(),
  isAllVisitorRule: RetargetingListServiceIsAllVisitorRule,
  isDateSpecificRule: RetargetingListServiceIsDateSpecificRule,
  rules: z.array(RetargetingListServiceRuleGroup).nullable(),
  startDate: z.string().nullable()
}).nullable();

export type RetargetingListServiceRuleBaseTargetList = z.infer<typeof RetargetingListServiceRuleBaseTargetList>;
