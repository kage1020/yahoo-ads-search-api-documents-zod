import { z } from 'zod';

export const AdGroupServiceBiddingKeywordCpcRange = z.object({
  min: z.number().int().nullable(),
  max: z.number().int().nullable()
}).nullable();

export type AdGroupServiceBiddingKeywordCpcRange = z.infer<typeof AdGroupServiceBiddingKeywordCpcRange>;
