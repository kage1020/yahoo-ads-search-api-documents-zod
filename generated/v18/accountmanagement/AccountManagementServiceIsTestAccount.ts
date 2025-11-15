import { z } from 'zod';

export const accountManagementServiceIsTestAccount = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountManagementServiceIsTestAccount = z.infer<typeof accountManagementServiceIsTestAccount>;
