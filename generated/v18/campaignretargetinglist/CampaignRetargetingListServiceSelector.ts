import { z } from 'zod';

import { CampaignRetargetingListServiceExcludedType } from './CampaignRetargetingListServiceExcludedType';

export const CampaignRetargetingListServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  excludedType: CampaignRetargetingListServiceExcludedType,
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  targetListIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type CampaignRetargetingListServiceSelector = z.infer<typeof CampaignRetargetingListServiceSelector>;
