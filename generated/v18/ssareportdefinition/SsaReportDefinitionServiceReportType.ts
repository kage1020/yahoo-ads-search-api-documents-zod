import { z } from 'zod';

export const SsaReportDefinitionServiceReportType = z.enum(["ACCOUNT", "CAMPAIGN", "ADGROUP", "SEARCH_QUERY", "PRODUCT_GROUP", "PRODUCT", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportType = z.infer<typeof SsaReportDefinitionServiceReportType>;
