import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAssetSetServicePage } from './PageFeedAssetSetServicePage';

export const pageFeedAssetSetServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: pageFeedAssetSetServicePage
}).nullable();

export type PageFeedAssetSetServiceGetResponse = z.infer<typeof pageFeedAssetSetServiceGetResponse>;
