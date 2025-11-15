import { z } from 'zod';

import { pageFeedAssetServiceGetReviewSummaryValue } from './PageFeedAssetServiceGetReviewSummaryValue';

export const pageFeedAssetServiceGetReviewSummaryPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(pageFeedAssetServiceGetReviewSummaryValue).nullable()
}).nullable();

export type PageFeedAssetServiceGetReviewSummaryPage = z.infer<typeof pageFeedAssetServiceGetReviewSummaryPage>;
