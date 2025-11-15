import { z } from 'zod';

import { campaignServiceIsRemove } from './CampaignServiceIsRemove';

export const campaignServiceMaximizeConversionsBiddingScheme = z.object({
  targetCpa: z.number().int().nullable(),
  isRemoveTargetCpa: campaignServiceIsRemove
}).nullable();

export type CampaignServiceMaximizeConversionsBiddingScheme = z.infer<typeof campaignServiceMaximizeConversionsBiddingScheme>;
