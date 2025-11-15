import { z } from 'zod';

export const reportDefinitionServiceReportIncludeDeleted = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportIncludeDeleted = z.infer<typeof reportDefinitionServiceReportIncludeDeleted>;
