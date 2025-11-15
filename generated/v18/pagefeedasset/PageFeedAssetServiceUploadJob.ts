import { z } from 'zod';

import { PageFeedAssetServiceUploadJobStatus } from './PageFeedAssetServiceUploadJobStatus';

export const PageFeedAssetServiceUploadJob = z.object({
  accountId: z.number().int().nullable(),
  jobId: z.number().int().nullable(),
  pageFeedAssetSetId: z.number().int().nullable(),
  uploadJobStatus: PageFeedAssetServiceUploadJobStatus,
  progress: z.number().int().nullable(),
  errorCount: z.number().int().nullable(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type PageFeedAssetServiceUploadJob = z.infer<typeof PageFeedAssetServiceUploadJob>;
