import { z } from 'zod';

export const campaignServiceTargetCpaBiddingScheme = z.object({
  bidCeiling: z.number().int().nullable(),
  bidFloor: z.number().int().nullable(),
  targetCpa: z.number().int().nullable()
}).nullable();

export type CampaignServiceTargetCpaBiddingScheme = z.infer<typeof campaignServiceTargetCpaBiddingScheme>;
