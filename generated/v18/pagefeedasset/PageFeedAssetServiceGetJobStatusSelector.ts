import { z } from 'zod';

import { pageFeedAssetServiceGetJobStatusType } from './PageFeedAssetServiceGetJobStatusType';

export const pageFeedAssetServiceGetJobStatusSelector = z.object({
  accountId: z.number().int(),
  jobIds: z.array(z.number().int().nullable()).nullable(),
  jobType: pageFeedAssetServiceGetJobStatusType,
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type PageFeedAssetServiceGetJobStatusSelector = z.infer<typeof pageFeedAssetServiceGetJobStatusSelector>;
