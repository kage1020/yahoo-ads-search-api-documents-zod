import { z } from 'zod';

export const CampaignExportServiceOutput = z.enum(["CSV", "ZIPPED_CSV", "UNKNOWN"]).nullable();

export type CampaignExportServiceOutput = z.infer<typeof CampaignExportServiceOutput>;
