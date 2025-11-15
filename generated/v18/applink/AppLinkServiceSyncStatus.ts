import { z } from 'zod';

export const appLinkServiceSyncStatus = z.enum(["IN_PROGRESS", "COMPLETED", "UNKNOWN"]).nullable();

export type AppLinkServiceSyncStatus = z.infer<typeof appLinkServiceSyncStatus>;
