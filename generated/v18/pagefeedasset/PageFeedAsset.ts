import { z } from 'zod';

import { pageFeedAssetServiceApprovalStatus } from './PageFeedAssetServiceApprovalStatus';

export const pageFeedAsset = z.object({
  accountId: z.number().int().nullable(),
  pageFeedAssetSetId: z.number().int().nullable(),
  pageFeedAssetId: z.number().int().nullable(),
  approvalStatus: pageFeedAssetServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReasonComment: z.string().nullable(),
  pageFeedAssetCustomLabel: z.string().nullable(),
  pageFeedAssetUrl: z.string().nullable()
}).nullable();

export type PageFeedAsset = z.infer<typeof pageFeedAsset>;
