import { z } from 'zod';

import { AuditLogServiceEventTypes } from './AuditLogServiceEventTypes';

export const AuditLogServiceEventSelector = z.object({
  entityType: z.string().nullable(),
  eventTypes: z.array(AuditLogServiceEventTypes).nullable()
}).nullable();

export type AuditLogServiceEventSelector = z.infer<typeof AuditLogServiceEventSelector>;
