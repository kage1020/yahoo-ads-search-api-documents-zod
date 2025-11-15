import { z } from 'zod';

import { CampaignServiceIsRemove } from './CampaignServiceIsRemove';

export const CampaignServiceMaximizeConversionValueBiddingScheme = z.object({
  targetRoas: z.number().nullable(),
  isRemoveTargetRoas: CampaignServiceIsRemove
}).nullable();

export type CampaignServiceMaximizeConversionValueBiddingScheme = z.infer<typeof CampaignServiceMaximizeConversionValueBiddingScheme>;
