import { z } from 'zod';

export const AdGroupAssetServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AdGroupAssetServiceUserStatus = z.infer<typeof AdGroupAssetServiceUserStatus>;
