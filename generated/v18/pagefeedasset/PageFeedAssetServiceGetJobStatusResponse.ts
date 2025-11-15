import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAssetServiceGetJobStatusPage } from './PageFeedAssetServiceGetJobStatusPage';

export const pageFeedAssetServiceGetJobStatusResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: pageFeedAssetServiceGetJobStatusPage
}).nullable();

export type PageFeedAssetServiceGetJobStatusResponse = z.infer<typeof pageFeedAssetServiceGetJobStatusResponse>;
