import { z } from 'zod';

export const pageFeedAssetServiceBulkOutput = z.enum(["CSV", "TSV", "ZIPPED_CSV", "ZIPPED_TSV", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceBulkOutput = z.infer<typeof pageFeedAssetServiceBulkOutput>;
