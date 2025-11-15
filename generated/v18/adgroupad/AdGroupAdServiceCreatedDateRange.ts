import { z } from 'zod';

export const adGroupAdServiceCreatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type AdGroupAdServiceCreatedDateRange = z.infer<typeof adGroupAdServiceCreatedDateRange>;
