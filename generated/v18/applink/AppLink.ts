import { z } from 'zod';

import { appLinkServiceAppLinkPlatform } from './AppLinkServiceAppLinkPlatform';
import { appLinkServiceLinkStatus } from './AppLinkServiceLinkStatus';
import { appLinkServiceSyncStatus } from './AppLinkServiceSyncStatus';

export const appLink = z.object({
  accountId: z.number().int().nullable(),
  appLinkId: z.number().int().nullable(),
  appVendorId: z.string().nullable(),
  appVendorNameJa: z.string().nullable(),
  appVendorNameEn: z.string().nullable(),
  appId: z.string().nullable(),
  appLinkPlatform: appLinkServiceAppLinkPlatform,
  linkId: z.string().nullable(),
  linkStatus: appLinkServiceLinkStatus,
  syncStatus: appLinkServiceSyncStatus
}).nullable();

export type AppLink = z.infer<typeof appLink>;
