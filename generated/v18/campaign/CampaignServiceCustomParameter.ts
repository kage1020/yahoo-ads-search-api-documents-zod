import { z } from 'zod';

export const CampaignServiceCustomParameter = z.object({
  key: z.string().nullable(),
  value: z.string().nullable()
}).nullable();

export type CampaignServiceCustomParameter = z.infer<typeof CampaignServiceCustomParameter>;
