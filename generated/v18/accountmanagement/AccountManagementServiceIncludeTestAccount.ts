import { z } from 'zod';

export const accountManagementServiceIncludeTestAccount = z.enum(["ONLY_TEST", "EXCLUDE_TEST", "ALL", "UNKNOWN"]).nullable();

export type AccountManagementServiceIncludeTestAccount = z.infer<typeof accountManagementServiceIncludeTestAccount>;
