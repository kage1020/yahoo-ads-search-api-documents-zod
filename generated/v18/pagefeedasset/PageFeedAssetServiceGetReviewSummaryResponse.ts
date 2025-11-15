import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAssetServiceGetReviewSummaryPage } from './PageFeedAssetServiceGetReviewSummaryPage';

export const PageFeedAssetServiceGetReviewSummaryResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: PageFeedAssetServiceGetReviewSummaryPage
}).nullable();

export type PageFeedAssetServiceGetReviewSummaryResponse = z.infer<typeof PageFeedAssetServiceGetReviewSummaryResponse>;
