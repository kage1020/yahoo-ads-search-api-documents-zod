import { z } from 'zod';

export const campaignLabel = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  labelId: z.number().int().nullable()
}).nullable();

export type CampaignLabel = z.infer<typeof campaignLabel>;
