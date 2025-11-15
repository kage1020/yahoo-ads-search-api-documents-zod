import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAssetServiceDownloadJob } from './PageFeedAssetServiceDownloadJob';

export const pageFeedAssetServiceAddDownloadJobValue = z.object({
  errors: z.array(error).nullable(),
  job: pageFeedAssetServiceDownloadJob,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type PageFeedAssetServiceAddDownloadJobValue = z.infer<typeof pageFeedAssetServiceAddDownloadJobValue>;
