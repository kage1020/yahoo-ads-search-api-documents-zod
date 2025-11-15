import { z } from 'zod';

import { campaignRetargetingListServiceCriterionTargetList } from './CampaignRetargetingListServiceCriterionTargetList';
import { campaignRetargetingListServiceExcludedType } from './CampaignRetargetingListServiceExcludedType';

export const campaignRetargetingList = z.object({
  accountId: z.number().int().nullable(),
  bidMultiplier: z.number().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  criterionTargetList: campaignRetargetingListServiceCriterionTargetList,
  excludedType: campaignRetargetingListServiceExcludedType
}).nullable();

export type CampaignRetargetingList = z.infer<typeof campaignRetargetingList>;
