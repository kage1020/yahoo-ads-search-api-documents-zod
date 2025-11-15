import { z } from 'zod';

export const auditLogServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  jobId: z.number().int().nullable()
}).nullable();

export type AuditLogServiceDownloadSelector = z.infer<typeof auditLogServiceDownloadSelector>;
