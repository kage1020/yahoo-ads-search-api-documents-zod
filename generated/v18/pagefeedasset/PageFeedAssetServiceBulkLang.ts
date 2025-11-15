import { z } from 'zod';

export const pageFeedAssetServiceBulkLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceBulkLang = z.infer<typeof pageFeedAssetServiceBulkLang>;
