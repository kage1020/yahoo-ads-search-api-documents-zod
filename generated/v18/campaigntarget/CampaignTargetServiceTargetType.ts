import { z } from 'zod';

export const campaignTargetServiceTargetType = z.enum(["LOCATION", "SCHEDULE", "NETWORK", "PLATFORM", "RADIUS", "UNKNOWN"]).nullable();

export type CampaignTargetServiceTargetType = z.infer<typeof campaignTargetServiceTargetType>;
