import { z } from 'zod';

export const AuditLogServiceLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type AuditLogServiceLang = z.infer<typeof AuditLogServiceLang>;
