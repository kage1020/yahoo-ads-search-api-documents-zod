import { z } from 'zod';

import { AuditLogServiceJob } from './AuditLogServiceJob';

export const AuditLogServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AuditLogServiceJob).nullable()
}).nullable();

export type AuditLogServiceOperation = z.infer<typeof AuditLogServiceOperation>;
