import { z } from 'zod';

export const appLinkServiceLinkStatus = z.enum(["ENABLED", "DISABLED", "UNKNOWN"]).nullable();

export type AppLinkServiceLinkStatus = z.infer<typeof appLinkServiceLinkStatus>;
