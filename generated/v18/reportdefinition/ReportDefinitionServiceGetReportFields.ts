import { z } from 'zod';

import { reportDefinitionServiceReportType } from './ReportDefinitionServiceReportType';

export const reportDefinitionServiceGetReportFields = z.object({
  reportType: reportDefinitionServiceReportType
}).nullable();

export type ReportDefinitionServiceGetReportFields = z.infer<typeof reportDefinitionServiceGetReportFields>;
