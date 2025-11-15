import { z } from 'zod';

export const appLinkServiceAppLinkPlatform = z.enum(["ANDROID", "UNKNOWN"]).nullable();

export type AppLinkServiceAppLinkPlatform = z.infer<typeof appLinkServiceAppLinkPlatform>;
