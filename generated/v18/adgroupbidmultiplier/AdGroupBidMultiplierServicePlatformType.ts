import { z } from 'zod';

export const adGroupBidMultiplierServicePlatformType = z.enum(["SMART_PHONE", "TABLET", "DESKTOP", "UNKNOWN"]).nullable();

export type AdGroupBidMultiplierServicePlatformType = z.infer<typeof adGroupBidMultiplierServicePlatformType>;
