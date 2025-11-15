import { z } from 'zod';

export const AccountManagementServiceIsTestAccount = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountManagementServiceIsTestAccount = z.infer<typeof AccountManagementServiceIsTestAccount>;
