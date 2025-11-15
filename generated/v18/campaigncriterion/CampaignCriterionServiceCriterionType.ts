import { z } from 'zod';

export const CampaignCriterionServiceCriterionType = z.enum(["KEYWORD", "UNKNOWN"]).nullable();

export type CampaignCriterionServiceCriterionType = z.infer<typeof CampaignCriterionServiceCriterionType>;
