import { z } from 'zod';

import { campaignServiceIsRemove } from './CampaignServiceIsRemove';

export const campaignServiceMaximizeConversionValueBiddingScheme = z.object({
  targetRoas: z.number().nullable(),
  isRemoveTargetRoas: campaignServiceIsRemove
}).nullable();

export type CampaignServiceMaximizeConversionValueBiddingScheme = z.infer<typeof campaignServiceMaximizeConversionValueBiddingScheme>;
