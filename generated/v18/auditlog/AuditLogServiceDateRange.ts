import { z } from 'zod';

export const AuditLogServiceDateRange = z.object({
  endDate: z.string().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type AuditLogServiceDateRange = z.infer<typeof AuditLogServiceDateRange>;
