import { z } from 'zod';

export const AppLinkServiceLinkStatus = z.enum(["ENABLED", "DISABLED", "UNKNOWN"]).nullable();

export type AppLinkServiceLinkStatus = z.infer<typeof AppLinkServiceLinkStatus>;
