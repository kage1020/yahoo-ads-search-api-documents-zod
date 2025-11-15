import { z } from 'zod';

export const adGroupCriterionServiceBiddingKeywordCpcRange = z.object({
  min: z.number().int().nullable(),
  max: z.number().int().nullable()
}).nullable();

export type AdGroupCriterionServiceBiddingKeywordCpcRange = z.infer<typeof adGroupCriterionServiceBiddingKeywordCpcRange>;
