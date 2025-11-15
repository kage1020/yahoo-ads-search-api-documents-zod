import { z } from 'zod';

import { adGroupCriterionServiceBidSource } from './AdGroupCriterionServiceBidSource';

export const adGroupCriterionServiceBid = z.object({
  adGroupCpc: z.number().int().nullable(),
  bidSource: adGroupCriterionServiceBidSource,
  keywordCpc: z.number().int().nullable(),
  cpc: z.number().int().nullable()
}).nullable();

export type AdGroupCriterionServiceBid = z.infer<typeof adGroupCriterionServiceBid>;
