import { z } from 'zod';

export const PageFeedAssetServiceReviewSummary = z.object({
  accountId: z.number().int().nullable(),
  approvedCount: z.number().int().nullable(),
  approvedWithReviewCount: z.number().int().nullable(),
  entityCount: z.number().int().nullable(),
  pageFeedAssetSetId: z.number().int().nullable(),
  postDisapprovedCount: z.number().int().nullable(),
  preDisapprovedCount: z.number().int().nullable(),
  reviewCount: z.number().int().nullable()
}).nullable();

export type PageFeedAssetServiceReviewSummary = z.infer<typeof PageFeedAssetServiceReviewSummary>;
