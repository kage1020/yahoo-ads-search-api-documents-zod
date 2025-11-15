import { z } from 'zod';

import { CampaignServiceTargetImpressionShareLocation } from './CampaignServiceTargetImpressionShareLocation';

export const CampaignServiceTargetImpressionShareScheme = z.object({
  location: CampaignServiceTargetImpressionShareLocation,
  bidCeiling: z.number().int().nullable(),
  targetImpressionShare: z.number().int().nullable()
}).nullable();

export type CampaignServiceTargetImpressionShareScheme = z.infer<typeof CampaignServiceTargetImpressionShareScheme>;
