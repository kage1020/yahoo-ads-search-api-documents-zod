import { z } from 'zod';

export const auditLogServiceEventTypes = z.enum(["ADD", "SET", "REMOVE", "ALL", "UNKNOWN"]).nullable();

export type AuditLogServiceEventTypes = z.infer<typeof auditLogServiceEventTypes>;
