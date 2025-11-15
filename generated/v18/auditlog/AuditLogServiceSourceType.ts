import { z } from 'zod';

export const auditLogServiceSourceType = z.enum(["API", "YAHOO_JAPAN", "CAMPAIGN_MANAGEMENT_TOOL", "ALL", "UNKNOWN"]).nullable();

export type AuditLogServiceSourceType = z.infer<typeof auditLogServiceSourceType>;
