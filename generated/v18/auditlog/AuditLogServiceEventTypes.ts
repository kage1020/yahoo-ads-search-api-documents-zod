import { z } from 'zod';

export const AuditLogServiceEventTypes = z.enum(["ADD", "SET", "REMOVE", "ALL", "UNKNOWN"]).nullable();

export type AuditLogServiceEventTypes = z.infer<typeof AuditLogServiceEventTypes>;
