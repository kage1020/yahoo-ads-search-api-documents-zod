import { z } from 'zod';

export const pageFeedAssetServiceGetReviewSummarySelector = z.object({
  accountId: z.number().int(),
  pageFeedAssetSetIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type PageFeedAssetServiceGetReviewSummarySelector = z.infer<typeof pageFeedAssetServiceGetReviewSummarySelector>;
