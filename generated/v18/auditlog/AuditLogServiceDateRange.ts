import { z } from 'zod';

export const auditLogServiceDateRange = z.object({
  endDate: z.string().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type AuditLogServiceDateRange = z.infer<typeof auditLogServiceDateRange>;
