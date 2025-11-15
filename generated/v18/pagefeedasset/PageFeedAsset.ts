import { z } from 'zod';

import { PageFeedAssetServiceApprovalStatus } from './PageFeedAssetServiceApprovalStatus';

export const PageFeedAsset = z.object({
  accountId: z.number().int().nullable(),
  pageFeedAssetSetId: z.number().int().nullable(),
  pageFeedAssetId: z.number().int().nullable(),
  approvalStatus: PageFeedAssetServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReasonComment: z.string().nullable(),
  pageFeedAssetCustomLabel: z.string().nullable(),
  pageFeedAssetUrl: z.string().nullable()
}).nullable();

export type PageFeedAsset = z.infer<typeof PageFeedAsset>;
