import { z } from 'zod';

export const ConversionTrackerServiceConversionCountingType = z.enum(["ONE_PER_CLICK", "MANY_PER_CLICK", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceConversionCountingType = z.infer<typeof ConversionTrackerServiceConversionCountingType>;
