import { z } from 'zod';

export const CampaignServiceGoalConfigLevel = z.enum(["ACCOUNT", "CAMPAIGN", "UNKNOWN"]).nullable();

export type CampaignServiceGoalConfigLevel = z.infer<typeof CampaignServiceGoalConfigLevel>;
