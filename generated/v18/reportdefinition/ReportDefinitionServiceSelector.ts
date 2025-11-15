import { z } from 'zod';

import { reportDefinitionServiceReportJobStatus } from './ReportDefinitionServiceReportJobStatus';
import { reportDefinitionServiceReportType } from './ReportDefinitionServiceReportType';

export const reportDefinitionServiceSelector = z.object({
  accountId: z.number().int(),
  reportJobIds: z.array(z.number().int().nullable()).nullable(),
  reportJobStatuses: z.array(reportDefinitionServiceReportJobStatus).nullable(),
  reportTypes: z.array(reportDefinitionServiceReportType).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type ReportDefinitionServiceSelector = z.infer<typeof reportDefinitionServiceSelector>;
