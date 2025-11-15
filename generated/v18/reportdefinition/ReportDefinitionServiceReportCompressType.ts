import { z } from 'zod';

export const reportDefinitionServiceReportCompressType = z.enum(["NONE", "ZIP", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportCompressType = z.infer<typeof reportDefinitionServiceReportCompressType>;
