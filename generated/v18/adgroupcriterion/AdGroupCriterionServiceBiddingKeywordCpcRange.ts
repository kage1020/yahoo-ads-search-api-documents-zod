import { z } from 'zod';

export const AdGroupCriterionServiceBiddingKeywordCpcRange = z.object({
  min: z.number().int().nullable(),
  max: z.number().int().nullable()
}).nullable();

export type AdGroupCriterionServiceBiddingKeywordCpcRange = z.infer<typeof AdGroupCriterionServiceBiddingKeywordCpcRange>;
