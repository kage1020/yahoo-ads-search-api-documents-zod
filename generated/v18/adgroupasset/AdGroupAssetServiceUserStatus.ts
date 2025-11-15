import { z } from 'zod';

export const adGroupAssetServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupAssetServiceUserStatus = z.infer<typeof adGroupAssetServiceUserStatus>;
