import { z } from 'zod';

export const ssaReportDefinitionServiceFilterOperator = z.enum(["EQUALS", "GREATER_THAN_EQUALS", "LESS_THAN_EQUALS", "CONTAINS", "IN", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceFilterOperator = z.infer<typeof ssaReportDefinitionServiceFilterOperator>;
