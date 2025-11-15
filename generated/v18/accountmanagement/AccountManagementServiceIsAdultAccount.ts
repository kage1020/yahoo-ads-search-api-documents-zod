import { z } from 'zod';

export const accountManagementServiceIsAdultAccount = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountManagementServiceIsAdultAccount = z.infer<typeof accountManagementServiceIsAdultAccount>;
