import { z } from 'zod';

import { Error } from './Error';
import { AuditLogServicePage } from './AuditLogServicePage';

export const AuditLogServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AuditLogServicePage
}).nullable();

export type AuditLogServiceGetResponse = z.infer<typeof AuditLogServiceGetResponse>;
