import { z } from 'zod';

export const campaignServiceTargetAll = z.enum(["ACTIVE", "DEACTIVE", "UNKNOWN"]).nullable();

export type CampaignServiceTargetAll = z.infer<typeof campaignServiceTargetAll>;
