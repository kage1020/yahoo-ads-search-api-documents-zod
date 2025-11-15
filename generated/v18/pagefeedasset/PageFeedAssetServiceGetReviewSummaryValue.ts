import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAssetServiceReviewSummary } from './PageFeedAssetServiceReviewSummary';

export const pageFeedAssetServiceGetReviewSummaryValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  reviewSummary: pageFeedAssetServiceReviewSummary
}).nullable();

export type PageFeedAssetServiceGetReviewSummaryValue = z.infer<typeof pageFeedAssetServiceGetReviewSummaryValue>;
