import { z } from 'zod';

import { reportDefinitionServiceReportDateRange } from './ReportDefinitionServiceReportDateRange';
import { reportDefinitionServiceReportFilter } from './ReportDefinitionServiceReportFilter';
import { reportDefinitionServiceReportCompressType } from './ReportDefinitionServiceReportCompressType';
import { reportDefinitionServiceReportDateRangeType } from './ReportDefinitionServiceReportDateRangeType';
import { reportDefinitionServiceReportDecimalPartDisplayType } from './ReportDefinitionServiceReportDecimalPartDisplayType';
import { reportDefinitionServiceReportDownloadEncode } from './ReportDefinitionServiceReportDownloadEncode';
import { reportDefinitionServiceReportDownloadFormat } from './ReportDefinitionServiceReportDownloadFormat';
import { reportDefinitionServiceReportIncludeDeleted } from './ReportDefinitionServiceReportIncludeDeleted';
import { reportDefinitionServiceReportJobStatus } from './ReportDefinitionServiceReportJobStatus';
import { reportDefinitionServiceReportLanguage } from './ReportDefinitionServiceReportLanguage';
import { reportDefinitionServiceReportSkipColumnHeader } from './ReportDefinitionServiceReportSkipColumnHeader';
import { reportDefinitionServiceReportSkipReportSummary } from './ReportDefinitionServiceReportSkipReportSummary';
import { reportDefinitionServiceReportType } from './ReportDefinitionServiceReportType';
import { reportDefinitionServiceReportSortField } from './ReportDefinitionServiceReportSortField';

export const reportDefinition = z.object({
  accountId: z.number().int().nullable(),
  completeTime: z.string().nullable(),
  dateRange: reportDefinitionServiceReportDateRange,
  fields: z.array(z.string().nullable()).nullable(),
  filters: z.array(reportDefinitionServiceReportFilter).nullable(),
  reportCompressType: reportDefinitionServiceReportCompressType,
  reportDateRangeType: reportDefinitionServiceReportDateRangeType,
  reportDecimalPartDisplayType: reportDefinitionServiceReportDecimalPartDisplayType,
  reportDownloadEncode: reportDefinitionServiceReportDownloadEncode,
  reportDownloadFormat: reportDefinitionServiceReportDownloadFormat,
  reportIncludeDeleted: reportDefinitionServiceReportIncludeDeleted,
  reportJobErrorDetail: z.string().nullable(),
  reportJobId: z.number().int().nullable(),
  reportJobStatus: reportDefinitionServiceReportJobStatus,
  reportLanguage: reportDefinitionServiceReportLanguage,
  reportName: z.string().nullable(),
  reportSkipColumnHeader: reportDefinitionServiceReportSkipColumnHeader,
  reportSkipReportSummary: reportDefinitionServiceReportSkipReportSummary,
  reportType: reportDefinitionServiceReportType,
  requestTime: z.string().nullable(),
  sortFields: z.array(reportDefinitionServiceReportSortField).nullable()
}).nullable();

export type ReportDefinition = z.infer<typeof reportDefinition>;
