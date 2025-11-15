import { z } from 'zod';

import { PageFeedAssetServiceDownloadJob } from './PageFeedAssetServiceDownloadJob';
import { Error } from './Error';
import { PageFeedAssetServiceUploadJob } from './PageFeedAssetServiceUploadJob';

export const PageFeedAssetServiceGetJobStatusValue = z.object({
  downloadJob: PageFeedAssetServiceDownloadJob,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  uploadJob: PageFeedAssetServiceUploadJob
}).nullable();

export type PageFeedAssetServiceGetJobStatusValue = z.infer<typeof PageFeedAssetServiceGetJobStatusValue>;
