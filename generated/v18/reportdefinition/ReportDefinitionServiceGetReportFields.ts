import { z } from 'zod';

import { ReportDefinitionServiceReportType } from './ReportDefinitionServiceReportType';

export const ReportDefinitionServiceGetReportFields = z.object({
  reportType: ReportDefinitionServiceReportType
}).nullable();

export type ReportDefinitionServiceGetReportFields = z.infer<typeof ReportDefinitionServiceGetReportFields>;
