import { z } from 'zod';

export const adGroupServiceUpdatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type AdGroupServiceUpdatedDateRange = z.infer<typeof adGroupServiceUpdatedDateRange>;
