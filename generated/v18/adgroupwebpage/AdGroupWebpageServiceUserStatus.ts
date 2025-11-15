import { z } from 'zod';

export const adGroupWebpageServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupWebpageServiceUserStatus = z.infer<typeof adGroupWebpageServiceUserStatus>;
