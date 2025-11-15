import { z } from 'zod';

export const AccountManagementServiceClientType = z.enum(["AGENT", "SELF", "UNKNOWN"]).nullable();

export type AccountManagementServiceClientType = z.infer<typeof AccountManagementServiceClientType>;
