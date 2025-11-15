import { z } from 'zod';

export const conversionTrackerServiceConversionCountingType = z.enum(["ONE_PER_CLICK", "MANY_PER_CLICK", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceConversionCountingType = z.infer<typeof conversionTrackerServiceConversionCountingType>;
