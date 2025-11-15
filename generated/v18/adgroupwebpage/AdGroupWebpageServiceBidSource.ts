import { z } from 'zod';

export const AdGroupWebpageServiceBidSource = z.enum(["ADGROUP", "CRITERION", "UNKNOWN"]).nullable();

export type AdGroupWebpageServiceBidSource = z.infer<typeof AdGroupWebpageServiceBidSource>;
