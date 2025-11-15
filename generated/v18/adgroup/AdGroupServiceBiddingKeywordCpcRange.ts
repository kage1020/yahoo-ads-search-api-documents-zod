import { z } from 'zod';

export const adGroupServiceBiddingKeywordCpcRange = z.object({
  min: z.number().int().nullable(),
  max: z.number().int().nullable()
}).nullable();

export type AdGroupServiceBiddingKeywordCpcRange = z.infer<typeof adGroupServiceBiddingKeywordCpcRange>;
