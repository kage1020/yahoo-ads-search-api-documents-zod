import { z } from 'zod';

export const AdGroupAdServiceCreatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type AdGroupAdServiceCreatedDateRange = z.infer<typeof AdGroupAdServiceCreatedDateRange>;
