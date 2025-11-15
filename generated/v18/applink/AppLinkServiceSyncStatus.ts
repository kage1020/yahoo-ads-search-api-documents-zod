import { z } from 'zod';

export const AppLinkServiceSyncStatus = z.enum(["IN_PROGRESS", "COMPLETED", "UNKNOWN"]).nullable();

export type AppLinkServiceSyncStatus = z.infer<typeof AppLinkServiceSyncStatus>;
