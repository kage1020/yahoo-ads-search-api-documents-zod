import { z } from 'zod';

export const SsaReportDefinitionServiceReportFieldAttribute = z.object({
  filterable: z.boolean().nullable(),
  selectable: z.boolean().nullable(),
  displayFieldNameEn: z.string().nullable(),
  displayFieldNameJa: z.string().nullable(),
  fieldName: z.string().nullable(),
  fieldType: z.string().nullable(),
  impossibleCombinationFields: z.array(z.string().nullable()).nullable(),
  xmlAttributeName: z.string().nullable()
}).nullable();

export type SsaReportDefinitionServiceReportFieldAttribute = z.infer<typeof SsaReportDefinitionServiceReportFieldAttribute>;
