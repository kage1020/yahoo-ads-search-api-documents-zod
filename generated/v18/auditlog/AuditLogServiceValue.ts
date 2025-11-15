import { z } from 'zod';

import { Error } from './Error';
import { AuditLogServiceJob } from './AuditLogServiceJob';

export const AuditLogServiceValue = z.object({
  errors: z.array(Error).nullable(),
  job: AuditLogServiceJob,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AuditLogServiceValue = z.infer<typeof AuditLogServiceValue>;
