import { z } from 'zod';

import { SsaReportDefinitionServiceReportDateRange } from './SsaReportDefinitionServiceReportDateRange';
import { SsaReportDefinitionServiceReportFilter } from './SsaReportDefinitionServiceReportFilter';
import { SsaReportDefinitionServiceReportCompressType } from './SsaReportDefinitionServiceReportCompressType';
import { SsaReportDefinitionServiceReportDateRangeType } from './SsaReportDefinitionServiceReportDateRangeType';
import { SsaReportDefinitionServiceReportDecimalPartDisplayType } from './SsaReportDefinitionServiceReportDecimalPartDisplayType';
import { SsaReportDefinitionServiceReportDownloadEncode } from './SsaReportDefinitionServiceReportDownloadEncode';
import { SsaReportDefinitionServiceReportDownloadFormat } from './SsaReportDefinitionServiceReportDownloadFormat';
import { SsaReportDefinitionServiceReportJobStatus } from './SsaReportDefinitionServiceReportJobStatus';
import { SsaReportDefinitionServiceReportLanguage } from './SsaReportDefinitionServiceReportLanguage';
import { SsaReportDefinitionServiceReportSkipColumnHeader } from './SsaReportDefinitionServiceReportSkipColumnHeader';
import { SsaReportDefinitionServiceReportSkipReportSummary } from './SsaReportDefinitionServiceReportSkipReportSummary';
import { SsaReportDefinitionServiceReportType } from './SsaReportDefinitionServiceReportType';
import { SsaReportDefinitionServiceReportSortField } from './SsaReportDefinitionServiceReportSortField';

export const SsaReportDefinition = z.object({
  accountId: z.number().int().nullable(),
  completeTime: z.string().nullable(),
  dateRange: SsaReportDefinitionServiceReportDateRange,
  fields: z.array(z.string().nullable()).nullable(),
  filters: z.array(SsaReportDefinitionServiceReportFilter).nullable(),
  reportCompressType: SsaReportDefinitionServiceReportCompressType,
  reportDateRangeType: SsaReportDefinitionServiceReportDateRangeType,
  reportDecimalPartDisplayType: SsaReportDefinitionServiceReportDecimalPartDisplayType,
  reportDownloadEncode: SsaReportDefinitionServiceReportDownloadEncode,
  reportDownloadFormat: SsaReportDefinitionServiceReportDownloadFormat,
  reportJobErrorDetail: z.string().nullable(),
  reportJobId: z.number().int().nullable(),
  reportJobStatus: SsaReportDefinitionServiceReportJobStatus,
  reportLanguage: SsaReportDefinitionServiceReportLanguage,
  reportName: z.string().nullable(),
  reportSkipColumnHeader: SsaReportDefinitionServiceReportSkipColumnHeader,
  reportSkipReportSummary: SsaReportDefinitionServiceReportSkipReportSummary,
  reportType: SsaReportDefinitionServiceReportType,
  requestTime: z.string().nullable(),
  sortFields: z.array(SsaReportDefinitionServiceReportSortField).nullable()
}).nullable();

export type SsaReportDefinition = z.infer<typeof SsaReportDefinition>;
