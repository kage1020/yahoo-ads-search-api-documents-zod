import { z } from 'zod';

export const PageFeedAssetServiceDownloadJobStatus = z.enum(["IN_PROGRESS", "COMPLETED", "FIELDS_ERROR", "TIMEOUT", "SYSTEM_ERROR", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceDownloadJobStatus = z.infer<typeof PageFeedAssetServiceDownloadJobStatus>;
