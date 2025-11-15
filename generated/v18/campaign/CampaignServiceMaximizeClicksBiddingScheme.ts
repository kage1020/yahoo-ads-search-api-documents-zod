import { z } from 'zod';

export const campaignServiceMaximizeClicksBiddingScheme = z.object({
  bidCeiling: z.number().int().nullable()
}).nullable();

export type CampaignServiceMaximizeClicksBiddingScheme = z.infer<typeof campaignServiceMaximizeClicksBiddingScheme>;
