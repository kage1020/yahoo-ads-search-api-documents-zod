import { z } from 'zod';

export const CampaignServiceAppOsType = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type CampaignServiceAppOsType = z.infer<typeof CampaignServiceAppOsType>;
