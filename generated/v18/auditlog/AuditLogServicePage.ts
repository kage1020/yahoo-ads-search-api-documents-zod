import { z } from 'zod';

import { AuditLogServiceValue } from './AuditLogServiceValue';

export const AuditLogServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AuditLogServiceValue).nullable()
}).nullable();

export type AuditLogServicePage = z.infer<typeof AuditLogServicePage>;
