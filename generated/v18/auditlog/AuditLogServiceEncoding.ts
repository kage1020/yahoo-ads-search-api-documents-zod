import { z } from 'zod';

export const AuditLogServiceEncoding = z.enum(["SJIS", "UTF8", "UNKNOWN"]).nullable();

export type AuditLogServiceEncoding = z.infer<typeof AuditLogServiceEncoding>;
