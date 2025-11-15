import { z } from 'zod';

export const AdGroupServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupServiceUserStatus = z.infer<typeof AdGroupServiceUserStatus>;
