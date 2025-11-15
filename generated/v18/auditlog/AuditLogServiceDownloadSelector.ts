import { z } from 'zod';

export const AuditLogServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  jobId: z.number().int().nullable()
}).nullable();

export type AuditLogServiceDownloadSelector = z.infer<typeof AuditLogServiceDownloadSelector>;
