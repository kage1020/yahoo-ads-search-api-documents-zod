import { z } from 'zod';

export const AuditLogServiceSourceType = z.enum(["API", "YAHOO_JAPAN", "CAMPAIGN_MANAGEMENT_TOOL", "ALL", "UNKNOWN"]).nullable();

export type AuditLogServiceSourceType = z.infer<typeof AuditLogServiceSourceType>;
