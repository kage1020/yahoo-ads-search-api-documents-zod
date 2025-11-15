import { z } from 'zod';

export const adGroupServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupServiceUserStatus = z.infer<typeof adGroupServiceUserStatus>;
