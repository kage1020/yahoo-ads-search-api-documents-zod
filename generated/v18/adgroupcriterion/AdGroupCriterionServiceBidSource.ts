import { z } from 'zod';

export const AdGroupCriterionServiceBidSource = z.enum(["ADGROUP", "CRITERION", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceBidSource = z.infer<typeof AdGroupCriterionServiceBidSource>;
