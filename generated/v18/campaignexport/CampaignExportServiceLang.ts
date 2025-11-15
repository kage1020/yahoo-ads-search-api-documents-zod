import { z } from 'zod';

export const campaignExportServiceLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type CampaignExportServiceLang = z.infer<typeof campaignExportServiceLang>;
