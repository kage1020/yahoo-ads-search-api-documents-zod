import { z } from 'zod';

import { AuditLogServiceDateRange } from './AuditLogServiceDateRange';
import { AuditLogServiceEncoding } from './AuditLogServiceEncoding';
import { AuditLogServiceEventSelector } from './AuditLogServiceEventSelector';
import { AuditLogServiceJobStatus } from './AuditLogServiceJobStatus';
import { AuditLogServiceLang } from './AuditLogServiceLang';
import { AuditLogServiceOutput } from './AuditLogServiceOutput';
import { AuditLogServiceSourceType } from './AuditLogServiceSourceType';

export const AuditLogServiceJob = z.object({
  accountId: z.number().int().nullable(),
  dateRange: AuditLogServiceDateRange,
  encoding: AuditLogServiceEncoding,
  eventSelector: z.array(AuditLogServiceEventSelector).nullable(),
  jobId: z.number().int().nullable(),
  jobName: z.string().nullable(),
  jobStatus: AuditLogServiceJobStatus,
  lang: AuditLogServiceLang,
  output: AuditLogServiceOutput,
  sourceType: AuditLogServiceSourceType
}).nullable();

export type AuditLogServiceJob = z.infer<typeof AuditLogServiceJob>;
