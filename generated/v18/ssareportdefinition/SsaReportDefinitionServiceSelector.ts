import { z } from 'zod';

import { ssaReportDefinitionServiceReportJobStatus } from './SsaReportDefinitionServiceReportJobStatus';
import { ssaReportDefinitionServiceReportType } from './SsaReportDefinitionServiceReportType';

export const ssaReportDefinitionServiceSelector = z.object({
  accountId: z.number().int(),
  reportJobIds: z.array(z.number().int().nullable()).nullable(),
  reportJobStatuses: z.array(ssaReportDefinitionServiceReportJobStatus).nullable(),
  reportTypes: z.array(ssaReportDefinitionServiceReportType).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type SsaReportDefinitionServiceSelector = z.infer<typeof ssaReportDefinitionServiceSelector>;
