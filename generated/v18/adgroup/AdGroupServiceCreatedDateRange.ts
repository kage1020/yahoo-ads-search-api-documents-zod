import { z } from 'zod';

export const adGroupServiceCreatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type AdGroupServiceCreatedDateRange = z.infer<typeof adGroupServiceCreatedDateRange>;
