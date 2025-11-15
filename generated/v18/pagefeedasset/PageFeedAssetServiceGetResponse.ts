import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAssetServicePage } from './PageFeedAssetServicePage';

export const pageFeedAssetServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: pageFeedAssetServicePage
}).nullable();

export type PageFeedAssetServiceGetResponse = z.infer<typeof pageFeedAssetServiceGetResponse>;
