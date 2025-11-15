import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAssetSet } from './PageFeedAssetSet';

export const pageFeedAssetSetServiceValue = z.object({
  errors: z.array(error).nullable(),
  pageFeedAssetSet: pageFeedAssetSet,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type PageFeedAssetSetServiceValue = z.infer<typeof pageFeedAssetSetServiceValue>;
