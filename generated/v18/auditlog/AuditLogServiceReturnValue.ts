import { z } from 'zod';

import { auditLogServiceValue } from './AuditLogServiceValue';

export const auditLogServiceReturnValue = z.object({
  values: z.array(auditLogServiceValue).nullable()
}).nullable();

export type AuditLogServiceReturnValue = z.infer<typeof auditLogServiceReturnValue>;
