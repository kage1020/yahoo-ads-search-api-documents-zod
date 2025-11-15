import { z } from 'zod';

export const ssaReportDefinitionServiceReportSkipColumnHeader = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportSkipColumnHeader = z.infer<typeof ssaReportDefinitionServiceReportSkipColumnHeader>;
