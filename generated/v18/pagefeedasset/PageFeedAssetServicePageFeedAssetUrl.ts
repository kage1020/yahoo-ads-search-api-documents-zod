import { z } from 'zod';

import { PageFeedAssetServiceMatchType } from './PageFeedAssetServiceMatchType';

export const PageFeedAssetServicePageFeedAssetUrl = z.object({
  matchType: PageFeedAssetServiceMatchType,
  text: z.string().nullable()
}).nullable();

export type PageFeedAssetServicePageFeedAssetUrl = z.infer<typeof PageFeedAssetServicePageFeedAssetUrl>;
