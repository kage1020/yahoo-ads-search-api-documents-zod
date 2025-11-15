import { z } from 'zod';

import { auditLogServiceEventTypes } from './AuditLogServiceEventTypes';

export const auditLogServiceEventSelector = z.object({
  entityType: z.string().nullable(),
  eventTypes: z.array(auditLogServiceEventTypes).nullable()
}).nullable();

export type AuditLogServiceEventSelector = z.infer<typeof auditLogServiceEventSelector>;
