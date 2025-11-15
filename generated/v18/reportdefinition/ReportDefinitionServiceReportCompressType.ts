import { z } from 'zod';

export const ReportDefinitionServiceReportCompressType = z.enum(["NONE", "ZIP", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportCompressType = z.infer<typeof ReportDefinitionServiceReportCompressType>;
