import { z } from 'zod';

import { AdGroupWebpageServiceBidSource } from './AdGroupWebpageServiceBidSource';

export const AdGroupWebpageServiceBid = z.object({
  adGroupCpc: z.number().int().nullable(),
  bidSource: AdGroupWebpageServiceBidSource,
  keywordCpc: z.number().int().nullable(),
  cpc: z.number().int().nullable()
}).nullable();

export type AdGroupWebpageServiceBid = z.infer<typeof AdGroupWebpageServiceBid>;
