import { z } from 'zod';

export const reportDefinitionServiceReportSkipColumnHeader = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportSkipColumnHeader = z.infer<typeof reportDefinitionServiceReportSkipColumnHeader>;
