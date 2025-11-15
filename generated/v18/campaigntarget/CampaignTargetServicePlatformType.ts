import { z } from 'zod';

export const campaignTargetServicePlatformType = z.enum(["SMART_PHONE", "TABLET", "DESKTOP", "UNKNOWN"]).nullable();

export type CampaignTargetServicePlatformType = z.infer<typeof campaignTargetServicePlatformType>;
