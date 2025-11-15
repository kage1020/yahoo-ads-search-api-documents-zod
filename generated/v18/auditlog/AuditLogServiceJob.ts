import { z } from 'zod';

import { auditLogServiceDateRange } from './AuditLogServiceDateRange';
import { auditLogServiceEncoding } from './AuditLogServiceEncoding';
import { auditLogServiceEventSelector } from './AuditLogServiceEventSelector';
import { auditLogServiceJobStatus } from './AuditLogServiceJobStatus';
import { auditLogServiceLang } from './AuditLogServiceLang';
import { auditLogServiceOutput } from './AuditLogServiceOutput';
import { auditLogServiceSourceType } from './AuditLogServiceSourceType';

export const auditLogServiceJob = z.object({
  accountId: z.number().int().nullable(),
  dateRange: auditLogServiceDateRange,
  encoding: auditLogServiceEncoding,
  eventSelector: z.array(auditLogServiceEventSelector).nullable(),
  jobId: z.number().int().nullable(),
  jobName: z.string().nullable(),
  jobStatus: auditLogServiceJobStatus,
  lang: auditLogServiceLang,
  output: auditLogServiceOutput,
  sourceType: auditLogServiceSourceType
}).nullable();

export type AuditLogServiceJob = z.infer<typeof auditLogServiceJob>;
