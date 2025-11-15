import { z } from 'zod';

export const SsaReportDefinitionServiceReportDecimalPartDisplayType = z.enum(["FULL_DISPLAY", "SIMPLE_DISPLAY", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportDecimalPartDisplayType = z.infer<typeof SsaReportDefinitionServiceReportDecimalPartDisplayType>;
