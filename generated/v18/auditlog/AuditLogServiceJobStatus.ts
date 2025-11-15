import { z } from 'zod';

export const auditLogServiceJobStatus = z.enum(["IN_PROGRESS", "COMPLETED", "TIMEOUT", "SYSTEM_ERROR", "UNKNOWN"]).nullable();

export type AuditLogServiceJobStatus = z.infer<typeof auditLogServiceJobStatus>;
