import { z } from 'zod';

export const campaignExportServiceFieldAttribute = z.object({
  displayFieldNameEN: z.string().nullable(),
  displayFieldNameJA: z.string().nullable(),
  fieldName: z.string().nullable()
}).nullable();

export type CampaignExportServiceFieldAttribute = z.infer<typeof campaignExportServiceFieldAttribute>;
