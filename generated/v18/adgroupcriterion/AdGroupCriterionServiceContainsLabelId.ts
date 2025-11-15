import { z } from 'zod';

export const AdGroupCriterionServiceContainsLabelId = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceContainsLabelId = z.infer<typeof AdGroupCriterionServiceContainsLabelId>;
