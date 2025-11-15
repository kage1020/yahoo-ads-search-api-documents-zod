import { z } from 'zod';

export const ssaReportDefinitionServiceReportDecimalPartDisplayType = z.enum(["FULL_DISPLAY", "SIMPLE_DISPLAY", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportDecimalPartDisplayType = z.infer<typeof ssaReportDefinitionServiceReportDecimalPartDisplayType>;
