import { z } from 'zod';

import { pageFeedAssetServiceApprovalStatus } from './PageFeedAssetServiceApprovalStatus';
import { pageFeedAssetServicePageFeedAssetUrl } from './PageFeedAssetServicePageFeedAssetUrl';

export const pageFeedAssetServiceSelector = z.object({
  accountId: z.number().int(),
  pageFeedAssetSetIds: z.array(z.number().int().nullable()).nullable(),
  pageFeedAssetIds: z.array(z.number().int().nullable()).nullable(),
  approvalStatuses: z.array(pageFeedAssetServiceApprovalStatus).nullable(),
  pageFeedAssetCustomLabels: z.array(z.string().nullable()).nullable(),
  pageFeedAssetUrls: z.array(pageFeedAssetServicePageFeedAssetUrl).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type PageFeedAssetServiceSelector = z.infer<typeof pageFeedAssetServiceSelector>;
