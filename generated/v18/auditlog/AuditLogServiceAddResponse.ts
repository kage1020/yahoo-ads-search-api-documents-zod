import { z } from 'zod';

import { Error } from './Error';
import { AuditLogServiceReturnValue } from './AuditLogServiceReturnValue';

export const AuditLogServiceAddResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AuditLogServiceReturnValue
}).nullable();

export type AuditLogServiceAddResponse = z.infer<typeof AuditLogServiceAddResponse>;
