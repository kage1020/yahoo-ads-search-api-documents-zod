import { z } from 'zod';

export const ssaReportDefinitionServiceReportType = z.enum(["ACCOUNT", "CAMPAIGN", "ADGROUP", "SEARCH_QUERY", "PRODUCT_GROUP", "PRODUCT", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportType = z.infer<typeof ssaReportDefinitionServiceReportType>;
