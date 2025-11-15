import { z } from 'zod';

import { pageFeedAssetServiceDownloadJob } from './PageFeedAssetServiceDownloadJob';

export const pageFeedAssetServiceAddDownloadJobOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(pageFeedAssetServiceDownloadJob).nullable()
}).nullable();

export type PageFeedAssetServiceAddDownloadJobOperation = z.infer<typeof pageFeedAssetServiceAddDownloadJobOperation>;
