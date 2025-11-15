import { z } from 'zod';

export const offlineConversionServiceUploadSourceType = z.enum(["API", "YAHOO_JAPAN", "CAMPAIGN_MANAGEMENT_TOOL", "UNKNOWN"]).nullable();

export type OfflineConversionServiceUploadSourceType = z.infer<typeof offlineConversionServiceUploadSourceType>;
