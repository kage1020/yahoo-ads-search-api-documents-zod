import { z } from 'zod';

export const campaignExportServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type CampaignExportServiceUserStatus = z.infer<typeof campaignExportServiceUserStatus>;
