import { z } from 'zod';

export const reportDefinitionServiceReportDecimalPartDisplayType = z.enum(["FULL_DISPLAY", "SIMPLE_DISPLAY", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportDecimalPartDisplayType = z.infer<typeof reportDefinitionServiceReportDecimalPartDisplayType>;
