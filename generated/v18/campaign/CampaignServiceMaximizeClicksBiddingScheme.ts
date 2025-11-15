import { z } from 'zod';

export const CampaignServiceMaximizeClicksBiddingScheme = z.object({
  bidCeiling: z.number().int().nullable()
}).nullable();

export type CampaignServiceMaximizeClicksBiddingScheme = z.infer<typeof CampaignServiceMaximizeClicksBiddingScheme>;
