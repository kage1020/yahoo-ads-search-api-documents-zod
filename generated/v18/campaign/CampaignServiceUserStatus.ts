import { z } from 'zod';

export const CampaignServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type CampaignServiceUserStatus = z.infer<typeof CampaignServiceUserStatus>;
