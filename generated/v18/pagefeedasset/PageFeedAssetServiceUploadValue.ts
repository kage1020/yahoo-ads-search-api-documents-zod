import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAssetServiceUploadJob } from './PageFeedAssetServiceUploadJob';

export const pageFeedAssetServiceUploadValue = z.object({
  errors: z.array(error).nullable(),
  uploadJob: pageFeedAssetServiceUploadJob,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type PageFeedAssetServiceUploadValue = z.infer<typeof pageFeedAssetServiceUploadValue>;
