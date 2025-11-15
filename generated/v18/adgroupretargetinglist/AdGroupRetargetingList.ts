import { z } from 'zod';

import { adGroupRetargetingListServiceCriterionTargetList } from './AdGroupRetargetingListServiceCriterionTargetList';
import { adGroupRetargetingListServiceExcludedType } from './AdGroupRetargetingListServiceExcludedType';

export const adGroupRetargetingList = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  bidMultiplier: z.number().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  criterionTargetList: adGroupRetargetingListServiceCriterionTargetList,
  excludedType: adGroupRetargetingListServiceExcludedType
}).nullable();

export type AdGroupRetargetingList = z.infer<typeof adGroupRetargetingList>;
