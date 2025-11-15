import { z } from 'zod';

import { adGroupWebpageServiceBidSource } from './AdGroupWebpageServiceBidSource';

export const adGroupWebpageServiceBid = z.object({
  adGroupCpc: z.number().int().nullable(),
  bidSource: adGroupWebpageServiceBidSource,
  keywordCpc: z.number().int().nullable(),
  cpc: z.number().int().nullable()
}).nullable();

export type AdGroupWebpageServiceBid = z.infer<typeof adGroupWebpageServiceBid>;
