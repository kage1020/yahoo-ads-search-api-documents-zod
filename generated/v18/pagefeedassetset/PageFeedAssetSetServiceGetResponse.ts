import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAssetSetServicePage } from './PageFeedAssetSetServicePage';

export const PageFeedAssetSetServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: PageFeedAssetSetServicePage
}).nullable();

export type PageFeedAssetSetServiceGetResponse = z.infer<typeof PageFeedAssetSetServiceGetResponse>;
