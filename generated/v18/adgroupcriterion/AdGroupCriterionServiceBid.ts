import { z } from 'zod';

import { AdGroupCriterionServiceBidSource } from './AdGroupCriterionServiceBidSource';

export const AdGroupCriterionServiceBid = z.object({
  adGroupCpc: z.number().int().nullable(),
  bidSource: AdGroupCriterionServiceBidSource,
  keywordCpc: z.number().int().nullable(),
  cpc: z.number().int().nullable()
}).nullable();

export type AdGroupCriterionServiceBid = z.infer<typeof AdGroupCriterionServiceBid>;
