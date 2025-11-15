import { z } from 'zod';

export const accountServiceIncludeTestAccount = z.enum(["ONLY_TEST", "EXCLUDE_TEST", "ALL", "UNKNOWN"]).nullable();

export type AccountServiceIncludeTestAccount = z.infer<typeof accountServiceIncludeTestAccount>;
