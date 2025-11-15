import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAssetServiceUploadReturnValue } from './PageFeedAssetServiceUploadReturnValue';

export const PageFeedAssetServiceUploadResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: PageFeedAssetServiceUploadReturnValue
}).nullable();

export type PageFeedAssetServiceUploadResponse = z.infer<typeof PageFeedAssetServiceUploadResponse>;
