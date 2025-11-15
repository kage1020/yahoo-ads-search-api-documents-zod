import { z } from 'zod';

export const pageFeedAssetServiceDownloadJobStatus = z.enum(["IN_PROGRESS", "COMPLETED", "FIELDS_ERROR", "TIMEOUT", "SYSTEM_ERROR", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceDownloadJobStatus = z.infer<typeof pageFeedAssetServiceDownloadJobStatus>;
