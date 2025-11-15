import { z } from 'zod';

import { pageFeedAssetServiceDownloadJob } from './PageFeedAssetServiceDownloadJob';
import { error } from '../../common/Error';
import { pageFeedAssetServiceUploadJob } from './PageFeedAssetServiceUploadJob';

export const pageFeedAssetServiceGetJobStatusValue = z.object({
  downloadJob: pageFeedAssetServiceDownloadJob,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  uploadJob: pageFeedAssetServiceUploadJob
}).nullable();

export type PageFeedAssetServiceGetJobStatusValue = z.infer<typeof pageFeedAssetServiceGetJobStatusValue>;
