import { z } from 'zod';

export const CampaignTargetServicePlatformType = z.enum(["SMART_PHONE", "TABLET", "DESKTOP", "UNKNOWN"]).nullable();

export type CampaignTargetServicePlatformType = z.infer<typeof CampaignTargetServicePlatformType>;
