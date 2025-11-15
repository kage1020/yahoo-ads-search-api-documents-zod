import { z } from 'zod';

import { PageFeedAssetServiceApprovalStatus } from './PageFeedAssetServiceApprovalStatus';
import { PageFeedAssetServicePageFeedAssetUrl } from './PageFeedAssetServicePageFeedAssetUrl';

export const PageFeedAssetServiceSelector = z.object({
  accountId: z.number().int(),
  pageFeedAssetSetIds: z.array(z.number().int().nullable()).nullable(),
  pageFeedAssetIds: z.array(z.number().int().nullable()).nullable(),
  approvalStatuses: z.array(PageFeedAssetServiceApprovalStatus).nullable(),
  pageFeedAssetCustomLabels: z.array(z.string().nullable()).nullable(),
  pageFeedAssetUrls: z.array(PageFeedAssetServicePageFeedAssetUrl).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type PageFeedAssetServiceSelector = z.infer<typeof PageFeedAssetServiceSelector>;
