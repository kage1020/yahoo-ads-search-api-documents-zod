import { z } from 'zod';

export const pageFeedAssetSetServiceSelector = z.object({
  accountId: z.number().int(),
  pageFeedAssetSetIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type PageFeedAssetSetServiceSelector = z.infer<typeof pageFeedAssetSetServiceSelector>;
