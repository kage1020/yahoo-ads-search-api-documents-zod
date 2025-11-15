import { z } from 'zod';

export const pageFeedAssetServiceMatchType = z.enum(["EXACT", "BROAD", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceMatchType = z.infer<typeof pageFeedAssetServiceMatchType>;
