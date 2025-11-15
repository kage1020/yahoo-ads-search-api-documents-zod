import { z } from 'zod';

export const ReportDefinitionServiceReportDateRangeType = z.enum(["TODAY", "YESTERDAY", "LAST_7_DAYS", "LAST_WEEK", "LAST_14_DAYS", "LAST_30_DAYS", "LAST_BUSINESS_WEEK", "THIS_MONTH", "THIS_MONTH_EXCEPT_TODAY", "LAST_MONTH", "ALL_TIME", "CUSTOM_DATE", "NO_RANGE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportDateRangeType = z.infer<typeof ReportDefinitionServiceReportDateRangeType>;
