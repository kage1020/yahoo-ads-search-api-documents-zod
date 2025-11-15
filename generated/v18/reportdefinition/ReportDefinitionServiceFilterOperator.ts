import { z } from 'zod';

export const reportDefinitionServiceFilterOperator = z.enum(["EQUALS", "NOT_EQUALS", "GREATER_THAN", "GREATER_THAN_EQUALS", "LESS_THAN", "LESS_THAN_EQUALS", "CONTAINS", "IN", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceFilterOperator = z.infer<typeof reportDefinitionServiceFilterOperator>;
