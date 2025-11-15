import { z } from 'zod';

export const BaseAccountServiceIncludeTestAccount = z.enum(["ONLY_TEST", "EXCLUDE_TEST", "ALL", "UNKNOWN"]).nullable();

export type BaseAccountServiceIncludeTestAccount = z.infer<typeof BaseAccountServiceIncludeTestAccount>;
