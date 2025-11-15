import { z } from 'zod';

export const adGroupCriterionServiceCriterionType = z.enum(["KEYWORD", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceCriterionType = z.infer<typeof adGroupCriterionServiceCriterionType>;
