import { z } from 'zod';

export const PageFeedAssetServiceGetJobStatusType = z.enum(["UPLOAD", "DOWNLOAD", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceGetJobStatusType = z.infer<typeof PageFeedAssetServiceGetJobStatusType>;
