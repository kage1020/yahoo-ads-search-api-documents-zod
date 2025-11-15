import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAsset } from './PageFeedAsset';

export const PageFeedAssetServiceReturnValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  pageFeedAsset: PageFeedAsset
}).nullable();

export type PageFeedAssetServiceReturnValue = z.infer<typeof PageFeedAssetServiceReturnValue>;
