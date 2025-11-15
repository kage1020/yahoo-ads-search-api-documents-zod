import { z } from 'zod';

export const CampaignServiceCreatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type CampaignServiceCreatedDateRange = z.infer<typeof CampaignServiceCreatedDateRange>;
