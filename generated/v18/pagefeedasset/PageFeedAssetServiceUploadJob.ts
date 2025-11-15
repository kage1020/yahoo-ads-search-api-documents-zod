import { z } from 'zod';

import { pageFeedAssetServiceUploadJobStatus } from './PageFeedAssetServiceUploadJobStatus';

export const pageFeedAssetServiceUploadJob = z.object({
  accountId: z.number().int().nullable(),
  jobId: z.number().int().nullable(),
  pageFeedAssetSetId: z.number().int().nullable(),
  uploadJobStatus: pageFeedAssetServiceUploadJobStatus,
  progress: z.number().int().nullable(),
  errorCount: z.number().int().nullable(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type PageFeedAssetServiceUploadJob = z.infer<typeof pageFeedAssetServiceUploadJob>;
