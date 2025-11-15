import { z } from 'zod';

export const PageFeedAssetServiceBulkOutput = z.enum(["CSV", "TSV", "ZIPPED_CSV", "ZIPPED_TSV", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceBulkOutput = z.infer<typeof PageFeedAssetServiceBulkOutput>;
