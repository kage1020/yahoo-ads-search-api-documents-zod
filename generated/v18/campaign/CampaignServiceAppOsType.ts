import { z } from 'zod';

export const campaignServiceAppOsType = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type CampaignServiceAppOsType = z.infer<typeof campaignServiceAppOsType>;
