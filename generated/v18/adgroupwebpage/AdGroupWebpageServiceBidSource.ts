import { z } from 'zod';

export const adGroupWebpageServiceBidSource = z.enum(["ADGROUP", "CRITERION", "UNKNOWN"]).nullable();

export type AdGroupWebpageServiceBidSource = z.infer<typeof adGroupWebpageServiceBidSource>;
