import { z } from 'zod';

export const AdGroupServiceUpdatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type AdGroupServiceUpdatedDateRange = z.infer<typeof AdGroupServiceUpdatedDateRange>;
