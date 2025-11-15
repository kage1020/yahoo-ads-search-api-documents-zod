import { z } from 'zod';

export const accountManagementServiceAutoTaggingEnabled = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type AccountManagementServiceAutoTaggingEnabled = z.infer<typeof accountManagementServiceAutoTaggingEnabled>;
