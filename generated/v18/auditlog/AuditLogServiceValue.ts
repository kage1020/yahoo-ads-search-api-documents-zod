import { z } from 'zod';

import { error } from '../../common/Error';
import { auditLogServiceJob } from './AuditLogServiceJob';

export const auditLogServiceValue = z.object({
  errors: z.array(error).nullable(),
  job: auditLogServiceJob,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AuditLogServiceValue = z.infer<typeof auditLogServiceValue>;
