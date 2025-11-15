import { z } from 'zod';

export const AdGroupServiceCreatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type AdGroupServiceCreatedDateRange = z.infer<typeof AdGroupServiceCreatedDateRange>;
