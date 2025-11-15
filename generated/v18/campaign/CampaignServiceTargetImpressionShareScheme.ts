import { z } from 'zod';

import { campaignServiceTargetImpressionShareLocation } from './CampaignServiceTargetImpressionShareLocation';

export const campaignServiceTargetImpressionShareScheme = z.object({
  location: campaignServiceTargetImpressionShareLocation,
  bidCeiling: z.number().int().nullable(),
  targetImpressionShare: z.number().int().nullable()
}).nullable();

export type CampaignServiceTargetImpressionShareScheme = z.infer<typeof campaignServiceTargetImpressionShareScheme>;
