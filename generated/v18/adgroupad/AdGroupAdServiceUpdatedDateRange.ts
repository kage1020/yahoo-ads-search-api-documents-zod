import { z } from 'zod';

export const adGroupAdServiceUpdatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type AdGroupAdServiceUpdatedDateRange = z.infer<typeof adGroupAdServiceUpdatedDateRange>;
