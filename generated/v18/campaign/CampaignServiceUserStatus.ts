import { z } from 'zod';

export const campaignServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type CampaignServiceUserStatus = z.infer<typeof campaignServiceUserStatus>;
