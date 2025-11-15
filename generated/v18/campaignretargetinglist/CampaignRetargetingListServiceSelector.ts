import { z } from 'zod';

import { campaignRetargetingListServiceExcludedType } from './CampaignRetargetingListServiceExcludedType';

export const campaignRetargetingListServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  excludedType: campaignRetargetingListServiceExcludedType,
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  targetListIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type CampaignRetargetingListServiceSelector = z.infer<typeof campaignRetargetingListServiceSelector>;
