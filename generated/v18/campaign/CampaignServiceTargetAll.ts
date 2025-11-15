import { z } from 'zod';

export const CampaignServiceTargetAll = z.enum(["ACTIVE", "DEACTIVE", "UNKNOWN"]).nullable();

export type CampaignServiceTargetAll = z.infer<typeof CampaignServiceTargetAll>;
