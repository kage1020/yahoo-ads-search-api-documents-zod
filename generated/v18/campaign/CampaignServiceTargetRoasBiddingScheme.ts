import { z } from 'zod';

export const campaignServiceTargetRoasBiddingScheme = z.object({
  bidCeiling: z.number().int().nullable(),
  bidFloor: z.number().int().nullable(),
  targetRoas: z.number().nullable()
}).nullable();

export type CampaignServiceTargetRoasBiddingScheme = z.infer<typeof campaignServiceTargetRoasBiddingScheme>;
