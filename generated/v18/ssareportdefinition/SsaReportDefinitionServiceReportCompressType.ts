import { z } from 'zod';

export const SsaReportDefinitionServiceReportCompressType = z.enum(["NONE", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportCompressType = z.infer<typeof SsaReportDefinitionServiceReportCompressType>;
