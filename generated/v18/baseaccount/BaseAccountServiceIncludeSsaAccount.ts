import { z } from 'zod';

export const BaseAccountServiceIncludeSsaAccount = z.enum(["ONLY_SSA", "EXCLUDE_SSA", "ALL", "UNKNOWN"]).nullable();

export type BaseAccountServiceIncludeSsaAccount = z.infer<typeof BaseAccountServiceIncludeSsaAccount>;
