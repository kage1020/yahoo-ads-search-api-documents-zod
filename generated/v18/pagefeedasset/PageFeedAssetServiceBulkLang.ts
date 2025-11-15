import { z } from 'zod';

export const PageFeedAssetServiceBulkLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceBulkLang = z.infer<typeof PageFeedAssetServiceBulkLang>;
