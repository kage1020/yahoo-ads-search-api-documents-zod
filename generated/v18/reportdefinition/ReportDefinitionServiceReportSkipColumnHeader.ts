import { z } from 'zod';

export const ReportDefinitionServiceReportSkipColumnHeader = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportSkipColumnHeader = z.infer<typeof ReportDefinitionServiceReportSkipColumnHeader>;
