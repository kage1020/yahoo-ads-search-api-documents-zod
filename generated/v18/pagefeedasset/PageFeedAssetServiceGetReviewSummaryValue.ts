import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAssetServiceReviewSummary } from './PageFeedAssetServiceReviewSummary';

export const PageFeedAssetServiceGetReviewSummaryValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  reviewSummary: PageFeedAssetServiceReviewSummary
}).nullable();

export type PageFeedAssetServiceGetReviewSummaryValue = z.infer<typeof PageFeedAssetServiceGetReviewSummaryValue>;
