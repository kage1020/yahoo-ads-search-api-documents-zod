import { z } from 'zod';

import { PageFeedAssetServiceDownloadJob } from './PageFeedAssetServiceDownloadJob';

export const PageFeedAssetServiceAddDownloadJobOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(PageFeedAssetServiceDownloadJob).nullable()
}).nullable();

export type PageFeedAssetServiceAddDownloadJobOperation = z.infer<typeof PageFeedAssetServiceAddDownloadJobOperation>;
