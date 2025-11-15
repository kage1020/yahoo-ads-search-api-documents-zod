import { z } from 'zod';

export const CampaignExportServiceFieldAttribute = z.object({
  displayFieldNameEN: z.string().nullable(),
  displayFieldNameJA: z.string().nullable(),
  fieldName: z.string().nullable()
}).nullable();

export type CampaignExportServiceFieldAttribute = z.infer<typeof CampaignExportServiceFieldAttribute>;
