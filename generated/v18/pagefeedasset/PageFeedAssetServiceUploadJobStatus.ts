import { z } from 'zod';

export const pageFeedAssetServiceUploadJobStatus = z.enum(["IN_PROGRESS", "COMPLETED", "COMPLETED_WITH_VALIDATION_ERROR", "FILE_FORMAT_ERROR", "FILE_ENCODING_ERROR", "COLUMN_HEADER_ERROR", "EXCEED_ROW_LINES", "EXCEED_FILE_COUNTS", "INVALID_PAGE_FEED_ASSET_SET_ID", "TIMEOUT", "SYSTEM_ERROR", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceUploadJobStatus = z.infer<typeof pageFeedAssetServiceUploadJobStatus>;
