import { z } from 'zod';

export const PageFeedAssetServiceBulkEncoding = z.enum(["SJIS", "UTF8", "UTF16LE", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceBulkEncoding = z.infer<typeof PageFeedAssetServiceBulkEncoding>;
