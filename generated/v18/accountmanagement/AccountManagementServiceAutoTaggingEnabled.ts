import { z } from 'zod';

export const AccountManagementServiceAutoTaggingEnabled = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type AccountManagementServiceAutoTaggingEnabled = z.infer<typeof AccountManagementServiceAutoTaggingEnabled>;
