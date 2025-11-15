import { z } from 'zod';

export const AdGroupAdServiceUpdatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type AdGroupAdServiceUpdatedDateRange = z.infer<typeof AdGroupAdServiceUpdatedDateRange>;
