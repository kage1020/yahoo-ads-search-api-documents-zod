import { z } from 'zod';

export const CampaignServiceUpdatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type CampaignServiceUpdatedDateRange = z.infer<typeof CampaignServiceUpdatedDateRange>;
