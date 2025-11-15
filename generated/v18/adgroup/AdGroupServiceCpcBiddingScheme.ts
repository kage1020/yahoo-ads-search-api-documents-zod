import { z } from 'zod';

export const adGroupServiceCpcBiddingScheme = z.object({
  cpc: z.number().int().nullable()
}).nullable();

export type AdGroupServiceCpcBiddingScheme = z.infer<typeof adGroupServiceCpcBiddingScheme>;
