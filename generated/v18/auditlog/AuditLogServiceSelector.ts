import { z } from 'zod';

import { auditLogServiceJobStatus } from './AuditLogServiceJobStatus';

export const auditLogServiceSelector = z.object({
  accountId: z.number().int(),
  jobIds: z.array(z.number().int().nullable()).nullable(),
  jobStatuses: z.array(auditLogServiceJobStatus).nullable(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AuditLogServiceSelector = z.infer<typeof auditLogServiceSelector>;
