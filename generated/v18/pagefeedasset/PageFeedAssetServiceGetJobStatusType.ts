import { z } from 'zod';

export const pageFeedAssetServiceGetJobStatusType = z.enum(["UPLOAD", "DOWNLOAD", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceGetJobStatusType = z.infer<typeof pageFeedAssetServiceGetJobStatusType>;
