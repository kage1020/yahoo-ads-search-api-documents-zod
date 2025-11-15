import { z } from 'zod';

export const campaignExportServiceEncoding = z.enum(["UTF8", "SJIS", "UNKNOWN"]).nullable();

export type CampaignExportServiceEncoding = z.infer<typeof campaignExportServiceEncoding>;
