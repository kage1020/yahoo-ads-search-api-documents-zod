import { z } from 'zod';

export const CampaignServiceType = z.enum(["STANDARD", "MOBILE_APP", "DYNAMIC_ADS_FOR_SEARCH", "UNKNOWN"]).nullable();

export type CampaignServiceType = z.infer<typeof CampaignServiceType>;
