import { z } from 'zod';

import { ReportDefinitionServiceReportDateRange } from './ReportDefinitionServiceReportDateRange';
import { ReportDefinitionServiceReportFilter } from './ReportDefinitionServiceReportFilter';
import { ReportDefinitionServiceReportCompressType } from './ReportDefinitionServiceReportCompressType';
import { ReportDefinitionServiceReportDateRangeType } from './ReportDefinitionServiceReportDateRangeType';
import { ReportDefinitionServiceReportDecimalPartDisplayType } from './ReportDefinitionServiceReportDecimalPartDisplayType';
import { ReportDefinitionServiceReportDownloadEncode } from './ReportDefinitionServiceReportDownloadEncode';
import { ReportDefinitionServiceReportDownloadFormat } from './ReportDefinitionServiceReportDownloadFormat';
import { ReportDefinitionServiceReportIncludeDeleted } from './ReportDefinitionServiceReportIncludeDeleted';
import { ReportDefinitionServiceReportJobStatus } from './ReportDefinitionServiceReportJobStatus';
import { ReportDefinitionServiceReportLanguage } from './ReportDefinitionServiceReportLanguage';
import { ReportDefinitionServiceReportSkipColumnHeader } from './ReportDefinitionServiceReportSkipColumnHeader';
import { ReportDefinitionServiceReportSkipReportSummary } from './ReportDefinitionServiceReportSkipReportSummary';
import { ReportDefinitionServiceReportType } from './ReportDefinitionServiceReportType';
import { ReportDefinitionServiceReportSortField } from './ReportDefinitionServiceReportSortField';

export const ReportDefinition = z.object({
  accountId: z.number().int().nullable(),
  completeTime: z.string().nullable(),
  dateRange: ReportDefinitionServiceReportDateRange,
  fields: z.array(z.string().nullable()).nullable(),
  filters: z.array(ReportDefinitionServiceReportFilter).nullable(),
  reportCompressType: ReportDefinitionServiceReportCompressType,
  reportDateRangeType: ReportDefinitionServiceReportDateRangeType,
  reportDecimalPartDisplayType: ReportDefinitionServiceReportDecimalPartDisplayType,
  reportDownloadEncode: ReportDefinitionServiceReportDownloadEncode,
  reportDownloadFormat: ReportDefinitionServiceReportDownloadFormat,
  reportIncludeDeleted: ReportDefinitionServiceReportIncludeDeleted,
  reportJobErrorDetail: z.string().nullable(),
  reportJobId: z.number().int().nullable(),
  reportJobStatus: ReportDefinitionServiceReportJobStatus,
  reportLanguage: ReportDefinitionServiceReportLanguage,
  reportName: z.string().nullable(),
  reportSkipColumnHeader: ReportDefinitionServiceReportSkipColumnHeader,
  reportSkipReportSummary: ReportDefinitionServiceReportSkipReportSummary,
  reportType: ReportDefinitionServiceReportType,
  requestTime: z.string().nullable(),
  sortFields: z.array(ReportDefinitionServiceReportSortField).nullable()
}).nullable();

export type ReportDefinition = z.infer<typeof ReportDefinition>;
