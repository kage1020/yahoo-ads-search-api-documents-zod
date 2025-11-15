import { z } from 'zod';

import { pageFeedAssetServiceAddDownloadJobValue } from './PageFeedAssetServiceAddDownloadJobValue';

export const pageFeedAssetServiceAddDownloadJobReturnValue = z.object({
  values: z.array(pageFeedAssetServiceAddDownloadJobValue).nullable()
}).nullable();

export type PageFeedAssetServiceAddDownloadJobReturnValue = z.infer<typeof pageFeedAssetServiceAddDownloadJobReturnValue>;
