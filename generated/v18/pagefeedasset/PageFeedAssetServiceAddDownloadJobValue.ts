import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAssetServiceDownloadJob } from './PageFeedAssetServiceDownloadJob';

export const PageFeedAssetServiceAddDownloadJobValue = z.object({
  errors: z.array(Error).nullable(),
  job: PageFeedAssetServiceDownloadJob,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type PageFeedAssetServiceAddDownloadJobValue = z.infer<typeof PageFeedAssetServiceAddDownloadJobValue>;
