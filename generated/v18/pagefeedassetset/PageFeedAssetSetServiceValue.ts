import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAssetSet } from './PageFeedAssetSet';

export const PageFeedAssetSetServiceValue = z.object({
  errors: z.array(Error).nullable(),
  pageFeedAssetSet: PageFeedAssetSet,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type PageFeedAssetSetServiceValue = z.infer<typeof PageFeedAssetSetServiceValue>;
