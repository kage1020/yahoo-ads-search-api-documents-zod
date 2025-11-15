import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAssetServiceGetJobStatusPage } from './PageFeedAssetServiceGetJobStatusPage';

export const PageFeedAssetServiceGetJobStatusResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: PageFeedAssetServiceGetJobStatusPage
}).nullable();

export type PageFeedAssetServiceGetJobStatusResponse = z.infer<typeof PageFeedAssetServiceGetJobStatusResponse>;
