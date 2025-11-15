import { z } from 'zod';

import { PageFeedAssetServiceGetJobStatusType } from './PageFeedAssetServiceGetJobStatusType';

export const PageFeedAssetServiceGetJobStatusSelector = z.object({
  accountId: z.number().int(),
  jobIds: z.array(z.number().int().nullable()).nullable(),
  jobType: PageFeedAssetServiceGetJobStatusType,
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type PageFeedAssetServiceGetJobStatusSelector = z.infer<typeof PageFeedAssetServiceGetJobStatusSelector>;
