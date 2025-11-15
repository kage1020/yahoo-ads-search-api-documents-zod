import { z } from 'zod';

import { PageFeedAssetServiceBulkEncoding } from './PageFeedAssetServiceBulkEncoding';
import { PageFeedAssetServiceBulkLang } from './PageFeedAssetServiceBulkLang';
import { PageFeedAssetServiceBulkOutput } from './PageFeedAssetServiceBulkOutput';
import { PageFeedAssetServiceDownloadJobStatus } from './PageFeedAssetServiceDownloadJobStatus';

export const PageFeedAssetServiceDownloadJob = z.object({
  accountId: z.number().int().nullable(),
  bulkEncoding: PageFeedAssetServiceBulkEncoding,
  bulkLang: PageFeedAssetServiceBulkLang,
  bulkOutput: PageFeedAssetServiceBulkOutput,
  downloadJobStatus: PageFeedAssetServiceDownloadJobStatus,
  endDate: z.string().nullable(),
  pageFeedAssetSetId: z.number().int().nullable(),
  jobId: z.number().int().nullable(),
  progress: z.number().int().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type PageFeedAssetServiceDownloadJob = z.infer<typeof PageFeedAssetServiceDownloadJob>;
