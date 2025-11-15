import { z } from 'zod';

export const CampaignExportServiceJobStatus = z.enum(["IN_PROGRESS", "COMPLETED", "TIMEOUT", "SYSTEM_ERROR", "UNKNOWN"]).nullable();

export type CampaignExportServiceJobStatus = z.infer<typeof CampaignExportServiceJobStatus>;
