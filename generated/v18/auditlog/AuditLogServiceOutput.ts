import { z } from 'zod';

export const auditLogServiceOutput = z.enum(["CSV", "TSV", "ZIPPED_CSV", "ZIPPED_TSV", "UNKNOWN"]).nullable();

export type AuditLogServiceOutput = z.infer<typeof auditLogServiceOutput>;
