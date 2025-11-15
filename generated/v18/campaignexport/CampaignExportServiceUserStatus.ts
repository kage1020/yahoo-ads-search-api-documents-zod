import { z } from 'zod';

export const CampaignExportServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type CampaignExportServiceUserStatus = z.infer<typeof CampaignExportServiceUserStatus>;
