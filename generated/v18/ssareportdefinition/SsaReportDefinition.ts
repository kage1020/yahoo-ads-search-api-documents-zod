import { z } from 'zod';

import { ssaReportDefinitionServiceReportDateRange } from './SsaReportDefinitionServiceReportDateRange';
import { ssaReportDefinitionServiceReportFilter } from './SsaReportDefinitionServiceReportFilter';
import { ssaReportDefinitionServiceReportCompressType } from './SsaReportDefinitionServiceReportCompressType';
import { ssaReportDefinitionServiceReportDateRangeType } from './SsaReportDefinitionServiceReportDateRangeType';
import { ssaReportDefinitionServiceReportDecimalPartDisplayType } from './SsaReportDefinitionServiceReportDecimalPartDisplayType';
import { ssaReportDefinitionServiceReportDownloadEncode } from './SsaReportDefinitionServiceReportDownloadEncode';
import { ssaReportDefinitionServiceReportDownloadFormat } from './SsaReportDefinitionServiceReportDownloadFormat';
import { ssaReportDefinitionServiceReportJobStatus } from './SsaReportDefinitionServiceReportJobStatus';
import { ssaReportDefinitionServiceReportLanguage } from './SsaReportDefinitionServiceReportLanguage';
import { ssaReportDefinitionServiceReportSkipColumnHeader } from './SsaReportDefinitionServiceReportSkipColumnHeader';
import { ssaReportDefinitionServiceReportSkipReportSummary } from './SsaReportDefinitionServiceReportSkipReportSummary';
import { ssaReportDefinitionServiceReportType } from './SsaReportDefinitionServiceReportType';
import { ssaReportDefinitionServiceReportSortField } from './SsaReportDefinitionServiceReportSortField';

export const ssaReportDefinition = z.object({
  accountId: z.number().int().nullable(),
  completeTime: z.string().nullable(),
  dateRange: ssaReportDefinitionServiceReportDateRange,
  fields: z.array(z.string().nullable()).nullable(),
  filters: z.array(ssaReportDefinitionServiceReportFilter).nullable(),
  reportCompressType: ssaReportDefinitionServiceReportCompressType,
  reportDateRangeType: ssaReportDefinitionServiceReportDateRangeType,
  reportDecimalPartDisplayType: ssaReportDefinitionServiceReportDecimalPartDisplayType,
  reportDownloadEncode: ssaReportDefinitionServiceReportDownloadEncode,
  reportDownloadFormat: ssaReportDefinitionServiceReportDownloadFormat,
  reportJobErrorDetail: z.string().nullable(),
  reportJobId: z.number().int().nullable(),
  reportJobStatus: ssaReportDefinitionServiceReportJobStatus,
  reportLanguage: ssaReportDefinitionServiceReportLanguage,
  reportName: z.string().nullable(),
  reportSkipColumnHeader: ssaReportDefinitionServiceReportSkipColumnHeader,
  reportSkipReportSummary: ssaReportDefinitionServiceReportSkipReportSummary,
  reportType: ssaReportDefinitionServiceReportType,
  requestTime: z.string().nullable(),
  sortFields: z.array(ssaReportDefinitionServiceReportSortField).nullable()
}).nullable();

export type SsaReportDefinition = z.infer<typeof ssaReportDefinition>;
