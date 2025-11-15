import { z } from 'zod';

export const auditLogServiceEncoding = z.enum(["SJIS", "UTF8", "UNKNOWN"]).nullable();

export type AuditLogServiceEncoding = z.infer<typeof auditLogServiceEncoding>;
