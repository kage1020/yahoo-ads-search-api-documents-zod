import { z } from 'zod';

export const abTestServiceCampaignUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AbTestServiceCampaignUserStatus = z.infer<typeof abTestServiceCampaignUserStatus>;
