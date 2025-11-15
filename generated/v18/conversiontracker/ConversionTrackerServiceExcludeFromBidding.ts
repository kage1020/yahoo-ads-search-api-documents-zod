import { z } from 'zod';

export const ConversionTrackerServiceExcludeFromBidding = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceExcludeFromBidding = z.infer<typeof ConversionTrackerServiceExcludeFromBidding>;
