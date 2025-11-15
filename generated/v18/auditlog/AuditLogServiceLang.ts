import { z } from 'zod';

export const auditLogServiceLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type AuditLogServiceLang = z.infer<typeof auditLogServiceLang>;
