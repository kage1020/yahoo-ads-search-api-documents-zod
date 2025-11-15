import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAssetServicePage } from './PageFeedAssetServicePage';

export const PageFeedAssetServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: PageFeedAssetServicePage
}).nullable();

export type PageFeedAssetServiceGetResponse = z.infer<typeof PageFeedAssetServiceGetResponse>;
