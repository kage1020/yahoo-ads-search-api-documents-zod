import { z } from 'zod';

export const pageFeedAssetServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  jobId: z.number().int().nullable()
}).nullable();

export type PageFeedAssetServiceDownloadSelector = z.infer<typeof pageFeedAssetServiceDownloadSelector>;
