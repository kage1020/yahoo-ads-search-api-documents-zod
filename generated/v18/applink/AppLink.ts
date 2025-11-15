import { z } from 'zod';

import { AppLinkServiceAppLinkPlatform } from './AppLinkServiceAppLinkPlatform';
import { AppLinkServiceLinkStatus } from './AppLinkServiceLinkStatus';
import { AppLinkServiceSyncStatus } from './AppLinkServiceSyncStatus';

export const AppLink = z.object({
  accountId: z.number().int().nullable(),
  appLinkId: z.number().int().nullable(),
  appVendorId: z.string().nullable(),
  appVendorNameJa: z.string().nullable(),
  appVendorNameEn: z.string().nullable(),
  appId: z.string().nullable(),
  appLinkPlatform: AppLinkServiceAppLinkPlatform,
  linkId: z.string().nullable(),
  linkStatus: AppLinkServiceLinkStatus,
  syncStatus: AppLinkServiceSyncStatus
}).nullable();

export type AppLink = z.infer<typeof AppLink>;
