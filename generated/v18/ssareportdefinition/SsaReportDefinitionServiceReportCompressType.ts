import { z } from 'zod';

export const ssaReportDefinitionServiceReportCompressType = z.enum(["NONE", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportCompressType = z.infer<typeof ssaReportDefinitionServiceReportCompressType>;
