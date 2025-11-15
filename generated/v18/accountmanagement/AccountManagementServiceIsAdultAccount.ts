import { z } from 'zod';

export const AccountManagementServiceIsAdultAccount = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountManagementServiceIsAdultAccount = z.infer<typeof AccountManagementServiceIsAdultAccount>;
