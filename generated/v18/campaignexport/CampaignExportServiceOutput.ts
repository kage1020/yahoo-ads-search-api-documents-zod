import { z } from 'zod';

export const campaignExportServiceOutput = z.enum(["CSV", "ZIPPED_CSV", "UNKNOWN"]).nullable();

export type CampaignExportServiceOutput = z.infer<typeof campaignExportServiceOutput>;
