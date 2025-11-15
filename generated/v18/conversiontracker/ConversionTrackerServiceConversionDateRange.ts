import { z } from 'zod';

export const ConversionTrackerServiceConversionDateRange = z.object({
  endDate: z.string().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type ConversionTrackerServiceConversionDateRange = z.infer<typeof ConversionTrackerServiceConversionDateRange>;
