import { z } from 'zod';

export const AdGroupWebpageServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupWebpageServiceUserStatus = z.infer<typeof AdGroupWebpageServiceUserStatus>;
