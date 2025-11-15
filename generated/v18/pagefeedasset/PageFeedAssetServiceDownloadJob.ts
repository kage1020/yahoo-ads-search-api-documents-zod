import { z } from 'zod';

import { pageFeedAssetServiceBulkEncoding } from './PageFeedAssetServiceBulkEncoding';
import { pageFeedAssetServiceBulkLang } from './PageFeedAssetServiceBulkLang';
import { pageFeedAssetServiceBulkOutput } from './PageFeedAssetServiceBulkOutput';
import { pageFeedAssetServiceDownloadJobStatus } from './PageFeedAssetServiceDownloadJobStatus';

export const pageFeedAssetServiceDownloadJob = z.object({
  accountId: z.number().int().nullable(),
  bulkEncoding: pageFeedAssetServiceBulkEncoding,
  bulkLang: pageFeedAssetServiceBulkLang,
  bulkOutput: pageFeedAssetServiceBulkOutput,
  downloadJobStatus: pageFeedAssetServiceDownloadJobStatus,
  endDate: z.string().nullable(),
  pageFeedAssetSetId: z.number().int().nullable(),
  jobId: z.number().int().nullable(),
  progress: z.number().int().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type PageFeedAssetServiceDownloadJob = z.infer<typeof pageFeedAssetServiceDownloadJob>;
