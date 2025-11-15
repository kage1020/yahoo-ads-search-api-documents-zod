import { z } from 'zod';

export const AuditLogServiceOutput = z.enum(["CSV", "TSV", "ZIPPED_CSV", "ZIPPED_TSV", "UNKNOWN"]).nullable();

export type AuditLogServiceOutput = z.infer<typeof AuditLogServiceOutput>;
