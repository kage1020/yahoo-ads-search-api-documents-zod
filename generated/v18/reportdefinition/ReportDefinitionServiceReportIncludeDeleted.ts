import { z } from 'zod';

export const ReportDefinitionServiceReportIncludeDeleted = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportIncludeDeleted = z.infer<typeof ReportDefinitionServiceReportIncludeDeleted>;
