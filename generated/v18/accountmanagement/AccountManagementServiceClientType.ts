import { z } from 'zod';

export const accountManagementServiceClientType = z.enum(["AGENT", "SELF", "UNKNOWN"]).nullable();

export type AccountManagementServiceClientType = z.infer<typeof accountManagementServiceClientType>;
