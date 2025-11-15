import { z } from 'zod';

export const campaignTargetServiceTargetingStatus = z.enum(["ACTIVE", "OBSOLETE", "PHASING_OUT", "UNKNOWN"]).nullable();

export type CampaignTargetServiceTargetingStatus = z.infer<typeof campaignTargetServiceTargetingStatus>;
