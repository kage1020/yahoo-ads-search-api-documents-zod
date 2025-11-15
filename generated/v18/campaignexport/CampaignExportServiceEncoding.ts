import { z } from 'zod';

export const CampaignExportServiceEncoding = z.enum(["UTF8", "SJIS", "UNKNOWN"]).nullable();

export type CampaignExportServiceEncoding = z.infer<typeof CampaignExportServiceEncoding>;
