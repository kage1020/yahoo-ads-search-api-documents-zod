import { z } from 'zod';

export const AccountManagementServiceIncludeTestAccount = z.enum(["ONLY_TEST", "EXCLUDE_TEST", "ALL", "UNKNOWN"]).nullable();

export type AccountManagementServiceIncludeTestAccount = z.infer<typeof AccountManagementServiceIncludeTestAccount>;
