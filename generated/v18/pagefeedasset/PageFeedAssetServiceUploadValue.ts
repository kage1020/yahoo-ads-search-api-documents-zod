import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAssetServiceUploadJob } from './PageFeedAssetServiceUploadJob';

export const PageFeedAssetServiceUploadValue = z.object({
  errors: z.array(Error).nullable(),
  uploadJob: PageFeedAssetServiceUploadJob,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type PageFeedAssetServiceUploadValue = z.infer<typeof PageFeedAssetServiceUploadValue>;
