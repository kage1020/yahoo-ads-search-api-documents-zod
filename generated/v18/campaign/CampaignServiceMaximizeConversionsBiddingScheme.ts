import { z } from 'zod';

import { CampaignServiceIsRemove } from './CampaignServiceIsRemove';

export const CampaignServiceMaximizeConversionsBiddingScheme = z.object({
  targetCpa: z.number().int().nullable(),
  isRemoveTargetCpa: CampaignServiceIsRemove
}).nullable();

export type CampaignServiceMaximizeConversionsBiddingScheme = z.infer<typeof CampaignServiceMaximizeConversionsBiddingScheme>;
