import { z } from 'zod';

export const AdGroupAdServiceSetTrademarkStatus = z.object({
  adGroupId: z.number().int().nullable(),
  adId: z.number().int().nullable(),
  campaignId: z.number().int().nullable()
}).nullable();

export type AdGroupAdServiceSetTrademarkStatus = z.infer<typeof AdGroupAdServiceSetTrademarkStatus>;
