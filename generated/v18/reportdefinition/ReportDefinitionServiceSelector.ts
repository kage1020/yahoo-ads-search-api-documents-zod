import { z } from 'zod';

import { ReportDefinitionServiceReportJobStatus } from './ReportDefinitionServiceReportJobStatus';
import { ReportDefinitionServiceReportType } from './ReportDefinitionServiceReportType';

export const ReportDefinitionServiceSelector = z.object({
  accountId: z.number().int(),
  reportJobIds: z.array(z.number().int().nullable()).nullable(),
  reportJobStatuses: z.array(ReportDefinitionServiceReportJobStatus).nullable(),
  reportTypes: z.array(ReportDefinitionServiceReportType).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type ReportDefinitionServiceSelector = z.infer<typeof ReportDefinitionServiceSelector>;
