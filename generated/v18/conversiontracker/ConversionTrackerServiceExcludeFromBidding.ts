import { z } from 'zod';

export const conversionTrackerServiceExcludeFromBidding = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceExcludeFromBidding = z.infer<typeof conversionTrackerServiceExcludeFromBidding>;
