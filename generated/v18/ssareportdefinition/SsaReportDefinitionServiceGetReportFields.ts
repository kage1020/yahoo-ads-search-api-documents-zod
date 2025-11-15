import { z } from 'zod';

import { SsaReportDefinitionServiceReportType } from './SsaReportDefinitionServiceReportType';

export const SsaReportDefinitionServiceGetReportFields = z.object({
  reportType: SsaReportDefinitionServiceReportType
}).nullable();

export type SsaReportDefinitionServiceGetReportFields = z.infer<typeof SsaReportDefinitionServiceGetReportFields>;
