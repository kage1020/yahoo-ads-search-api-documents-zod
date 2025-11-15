import { z } from 'zod';

export const AdGroupCriterionServiceCriterionType = z.enum(["KEYWORD", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceCriterionType = z.infer<typeof AdGroupCriterionServiceCriterionType>;
