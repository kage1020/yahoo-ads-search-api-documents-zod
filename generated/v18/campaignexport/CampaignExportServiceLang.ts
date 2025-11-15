import { z } from 'zod';

export const CampaignExportServiceLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type CampaignExportServiceLang = z.infer<typeof CampaignExportServiceLang>;
