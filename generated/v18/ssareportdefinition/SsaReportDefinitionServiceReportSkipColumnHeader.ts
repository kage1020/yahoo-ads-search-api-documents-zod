import { z } from 'zod';

export const SsaReportDefinitionServiceReportSkipColumnHeader = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportSkipColumnHeader = z.infer<typeof SsaReportDefinitionServiceReportSkipColumnHeader>;
