import { z } from 'zod';

export const PageFeedAssetServiceMatchType = z.enum(["EXACT", "BROAD", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceMatchType = z.infer<typeof PageFeedAssetServiceMatchType>;
