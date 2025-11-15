import { z } from 'zod';

export const PageFeedAssetSet = z.object({
  accountId: z.number().int().nullable(),
  pageFeedAssetSetId: z.number().int().nullable(),
  pageFeedAssetSetName: z.string().nullable(),
  domain: z.string().nullable()
}).nullable();

export type PageFeedAssetSet = z.infer<typeof PageFeedAssetSet>;
