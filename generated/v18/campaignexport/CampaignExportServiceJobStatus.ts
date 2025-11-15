import { z } from 'zod';

export const campaignExportServiceJobStatus = z.enum(["IN_PROGRESS", "COMPLETED", "TIMEOUT", "SYSTEM_ERROR", "UNKNOWN"]).nullable();

export type CampaignExportServiceJobStatus = z.infer<typeof campaignExportServiceJobStatus>;
