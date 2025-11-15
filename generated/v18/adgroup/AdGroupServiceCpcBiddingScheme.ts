import { z } from 'zod';

export const AdGroupServiceCpcBiddingScheme = z.object({
  cpc: z.number().int().nullable()
}).nullable();

export type AdGroupServiceCpcBiddingScheme = z.infer<typeof AdGroupServiceCpcBiddingScheme>;
