import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAsset } from './PageFeedAsset';

export const pageFeedAssetServiceReturnValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  pageFeedAsset: pageFeedAsset
}).nullable();

export type PageFeedAssetServiceReturnValue = z.infer<typeof pageFeedAssetServiceReturnValue>;
