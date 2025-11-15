import { z } from 'zod';

export const campaignCriterionServiceUse = z.enum(["NEGATIVE", "UNKNOWN"]).nullable();

export type CampaignCriterionServiceUse = z.infer<typeof campaignCriterionServiceUse>;
