import { z } from 'zod';

import { AdGroupRetargetingListServiceCriterionTargetList } from './AdGroupRetargetingListServiceCriterionTargetList';
import { AdGroupRetargetingListServiceExcludedType } from './AdGroupRetargetingListServiceExcludedType';

export const AdGroupRetargetingList = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  bidMultiplier: z.number().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  criterionTargetList: AdGroupRetargetingListServiceCriterionTargetList,
  excludedType: AdGroupRetargetingListServiceExcludedType
}).nullable();

export type AdGroupRetargetingList = z.infer<typeof AdGroupRetargetingList>;
