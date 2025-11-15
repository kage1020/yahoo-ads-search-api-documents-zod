import { z } from 'zod';

export const campaignServiceCustomParameter = z.object({
  key: z.string().nullable(),
  value: z.string().nullable()
}).nullable();

export type CampaignServiceCustomParameter = z.infer<typeof campaignServiceCustomParameter>;
