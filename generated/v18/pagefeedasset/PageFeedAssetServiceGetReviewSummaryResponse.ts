import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAssetServiceGetReviewSummaryPage } from './PageFeedAssetServiceGetReviewSummaryPage';

export const pageFeedAssetServiceGetReviewSummaryResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: pageFeedAssetServiceGetReviewSummaryPage
}).nullable();

export type PageFeedAssetServiceGetReviewSummaryResponse = z.infer<typeof pageFeedAssetServiceGetReviewSummaryResponse>;
