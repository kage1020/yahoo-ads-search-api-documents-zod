import { z } from 'zod';

export const campaignServiceGoalConfigLevel = z.enum(["ACCOUNT", "CAMPAIGN", "UNKNOWN"]).nullable();

export type CampaignServiceGoalConfigLevel = z.infer<typeof campaignServiceGoalConfigLevel>;
