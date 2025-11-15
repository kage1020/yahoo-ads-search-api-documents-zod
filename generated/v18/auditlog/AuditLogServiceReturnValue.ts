import { z } from 'zod';

import { AuditLogServiceValue } from './AuditLogServiceValue';

export const AuditLogServiceReturnValue = z.object({
  values: z.array(AuditLogServiceValue).nullable()
}).nullable();

export type AuditLogServiceReturnValue = z.infer<typeof AuditLogServiceReturnValue>;
