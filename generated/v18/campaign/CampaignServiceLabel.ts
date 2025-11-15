import { z } from 'zod';

export const CampaignServiceLabel = z.object({
  color: z.string().nullable(),
  description: z.string().nullable(),
  labelId: z.number().int().nullable(),
  labelName: z.string().nullable()
}).nullable();

export type CampaignServiceLabel = z.infer<typeof CampaignServiceLabel>;
