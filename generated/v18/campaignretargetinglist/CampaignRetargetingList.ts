import { z } from 'zod';

import { CampaignRetargetingListServiceCriterionTargetList } from './CampaignRetargetingListServiceCriterionTargetList';
import { CampaignRetargetingListServiceExcludedType } from './CampaignRetargetingListServiceExcludedType';

export const CampaignRetargetingList = z.object({
  accountId: z.number().int().nullable(),
  bidMultiplier: z.number().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  criterionTargetList: CampaignRetargetingListServiceCriterionTargetList,
  excludedType: CampaignRetargetingListServiceExcludedType
}).nullable();

export type CampaignRetargetingList = z.infer<typeof CampaignRetargetingList>;
