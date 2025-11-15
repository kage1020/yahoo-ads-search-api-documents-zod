import { z } from 'zod';

export const AppLinkServiceAppLinkPlatform = z.enum(["ANDROID", "UNKNOWN"]).nullable();

export type AppLinkServiceAppLinkPlatform = z.infer<typeof AppLinkServiceAppLinkPlatform>;
