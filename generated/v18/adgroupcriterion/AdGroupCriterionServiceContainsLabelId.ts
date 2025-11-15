import { z } from 'zod';

export const adGroupCriterionServiceContainsLabelId = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceContainsLabelId = z.infer<typeof adGroupCriterionServiceContainsLabelId>;
