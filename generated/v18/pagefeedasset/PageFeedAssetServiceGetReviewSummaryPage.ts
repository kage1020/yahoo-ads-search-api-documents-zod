import { z } from 'zod';

import { PageFeedAssetServiceGetReviewSummaryValue } from './PageFeedAssetServiceGetReviewSummaryValue';

export const PageFeedAssetServiceGetReviewSummaryPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(PageFeedAssetServiceGetReviewSummaryValue).nullable()
}).nullable();

export type PageFeedAssetServiceGetReviewSummaryPage = z.infer<typeof PageFeedAssetServiceGetReviewSummaryPage>;
