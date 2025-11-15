import { z } from 'zod';

import { PageFeedAssetServiceAddDownloadJobValue } from './PageFeedAssetServiceAddDownloadJobValue';

export const PageFeedAssetServiceAddDownloadJobReturnValue = z.object({
  values: z.array(PageFeedAssetServiceAddDownloadJobValue).nullable()
}).nullable();

export type PageFeedAssetServiceAddDownloadJobReturnValue = z.infer<typeof PageFeedAssetServiceAddDownloadJobReturnValue>;
