import { z } from 'zod';

export const adGroupAdServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupAdServiceUserStatus = z.infer<typeof adGroupAdServiceUserStatus>;
