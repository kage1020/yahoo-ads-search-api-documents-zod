import { z } from 'zod';

export const baseAccountServiceIncludeTestAccount = z.enum(["ONLY_TEST", "EXCLUDE_TEST", "ALL", "UNKNOWN"]).nullable();

export type BaseAccountServiceIncludeTestAccount = z.infer<typeof baseAccountServiceIncludeTestAccount>;
