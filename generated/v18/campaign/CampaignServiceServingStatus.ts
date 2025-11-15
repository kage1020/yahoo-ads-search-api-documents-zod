import { z } from 'zod';

export const CampaignServiceServingStatus = z.enum(["SERVING", "ENDED", "PENDING", "STOP", "UNKNOWN"]).nullable();

export type CampaignServiceServingStatus = z.infer<typeof CampaignServiceServingStatus>;
