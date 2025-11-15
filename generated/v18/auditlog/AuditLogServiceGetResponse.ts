import { z } from 'zod';

import { error } from '../../common/Error';
import { auditLogServicePage } from './AuditLogServicePage';

export const auditLogServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: auditLogServicePage
}).nullable();

export type AuditLogServiceGetResponse = z.infer<typeof auditLogServiceGetResponse>;
