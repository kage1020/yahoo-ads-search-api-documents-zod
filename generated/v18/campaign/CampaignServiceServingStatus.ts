import { z } from 'zod';

export const campaignServiceServingStatus = z.enum(["SERVING", "ENDED", "PENDING", "STOP", "UNKNOWN"]).nullable();

export type CampaignServiceServingStatus = z.infer<typeof campaignServiceServingStatus>;
