import { z } from 'zod';

import { auditLogServiceValue } from './AuditLogServiceValue';

export const auditLogServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(auditLogServiceValue).nullable()
}).nullable();

export type AuditLogServicePage = z.infer<typeof auditLogServicePage>;
