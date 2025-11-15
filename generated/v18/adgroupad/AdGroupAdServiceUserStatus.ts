import { z } from 'zod';

export const AdGroupAdServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupAdServiceUserStatus = z.infer<typeof AdGroupAdServiceUserStatus>;
