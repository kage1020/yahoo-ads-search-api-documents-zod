import { z } from 'zod';

export const CampaignCriterionServiceUse = z.enum(["NEGATIVE", "UNKNOWN"]).nullable();

export type CampaignCriterionServiceUse = z.infer<typeof CampaignCriterionServiceUse>;
