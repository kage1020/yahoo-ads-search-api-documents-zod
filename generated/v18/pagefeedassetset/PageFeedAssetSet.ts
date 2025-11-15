import { z } from 'zod';

export const pageFeedAssetSet = z.object({
  accountId: z.number().int().nullable(),
  pageFeedAssetSetId: z.number().int().nullable(),
  pageFeedAssetSetName: z.string().nullable(),
  domain: z.string().nullable()
}).nullable();

export type PageFeedAssetSet = z.infer<typeof pageFeedAssetSet>;
