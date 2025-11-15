import { z } from 'zod';

import { auditLogServiceJob } from './AuditLogServiceJob';

export const auditLogServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(auditLogServiceJob).nullable()
}).nullable();

export type AuditLogServiceOperation = z.infer<typeof auditLogServiceOperation>;
