import { z } from 'zod';

export const AdGroupAdLabel = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  adId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  labelId: z.number().int().nullable()
}).nullable();

export type AdGroupAdLabel = z.infer<typeof AdGroupAdLabel>;
