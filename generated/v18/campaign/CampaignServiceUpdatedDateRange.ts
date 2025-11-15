import { z } from 'zod';

export const campaignServiceUpdatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type CampaignServiceUpdatedDateRange = z.infer<typeof campaignServiceUpdatedDateRange>;
