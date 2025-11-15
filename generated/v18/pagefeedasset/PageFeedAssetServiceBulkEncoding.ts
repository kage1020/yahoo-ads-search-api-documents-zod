import { z } from 'zod';

export const pageFeedAssetServiceBulkEncoding = z.enum(["SJIS", "UTF8", "UTF16LE", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceBulkEncoding = z.infer<typeof pageFeedAssetServiceBulkEncoding>;
