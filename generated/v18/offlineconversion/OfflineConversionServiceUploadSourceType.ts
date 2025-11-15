import { z } from 'zod';

export const OfflineConversionServiceUploadSourceType = z.enum(["API", "YAHOO_JAPAN", "CAMPAIGN_MANAGEMENT_TOOL", "UNKNOWN"]).nullable();

export type OfflineConversionServiceUploadSourceType = z.infer<typeof OfflineConversionServiceUploadSourceType>;
