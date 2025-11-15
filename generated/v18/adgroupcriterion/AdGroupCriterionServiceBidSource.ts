import { z } from 'zod';

export const adGroupCriterionServiceBidSource = z.enum(["ADGROUP", "CRITERION", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceBidSource = z.infer<typeof adGroupCriterionServiceBidSource>;
