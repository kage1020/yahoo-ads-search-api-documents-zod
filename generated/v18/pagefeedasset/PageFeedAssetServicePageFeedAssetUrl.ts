import { z } from 'zod';

import { pageFeedAssetServiceMatchType } from './PageFeedAssetServiceMatchType';

export const pageFeedAssetServicePageFeedAssetUrl = z.object({
  matchType: pageFeedAssetServiceMatchType,
  text: z.string().nullable()
}).nullable();

export type PageFeedAssetServicePageFeedAssetUrl = z.infer<typeof pageFeedAssetServicePageFeedAssetUrl>;
