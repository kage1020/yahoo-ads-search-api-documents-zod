import { z } from 'zod';

export const AdGroupLabel = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  labelId: z.number().int().nullable()
}).nullable();

export type AdGroupLabel = z.infer<typeof AdGroupLabel>;
