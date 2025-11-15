import { z } from 'zod';

import { ssaReportDefinitionServiceReportType } from './SsaReportDefinitionServiceReportType';

export const ssaReportDefinitionServiceGetReportFields = z.object({
  reportType: ssaReportDefinitionServiceReportType
}).nullable();

export type SsaReportDefinitionServiceGetReportFields = z.infer<typeof ssaReportDefinitionServiceGetReportFields>;
