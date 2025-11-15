import { z } from 'zod';

export const campaignServiceLabel = z.object({
  color: z.string().nullable(),
  description: z.string().nullable(),
  labelId: z.number().int().nullable(),
  labelName: z.string().nullable()
}).nullable();

export type CampaignServiceLabel = z.infer<typeof campaignServiceLabel>;
