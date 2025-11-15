import { z } from 'zod';

import { SsaReportDefinitionServiceReportJobStatus } from './SsaReportDefinitionServiceReportJobStatus';
import { SsaReportDefinitionServiceReportType } from './SsaReportDefinitionServiceReportType';

export const SsaReportDefinitionServiceSelector = z.object({
  accountId: z.number().int(),
  reportJobIds: z.array(z.number().int().nullable()).nullable(),
  reportJobStatuses: z.array(SsaReportDefinitionServiceReportJobStatus).nullable(),
  reportTypes: z.array(SsaReportDefinitionServiceReportType).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type SsaReportDefinitionServiceSelector = z.infer<typeof SsaReportDefinitionServiceSelector>;
