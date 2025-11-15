import { z } from 'zod';

export const AbTestServiceCampaignUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AbTestServiceCampaignUserStatus = z.infer<typeof AbTestServiceCampaignUserStatus>;
