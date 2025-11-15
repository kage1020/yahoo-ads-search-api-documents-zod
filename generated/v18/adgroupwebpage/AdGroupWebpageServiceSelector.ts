import { z } from 'zod';

export const AdGroupWebpageServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  targetIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type AdGroupWebpageServiceSelector = z.infer<typeof AdGroupWebpageServiceSelector>;
