import { z } from 'zod';

export const campaignCriterionServiceCriterionType = z.enum(["KEYWORD", "UNKNOWN"]).nullable();

export type CampaignCriterionServiceCriterionType = z.infer<typeof campaignCriterionServiceCriterionType>;
