import { z } from 'zod';

export const adGroupCriterionServiceIsRemove = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceIsRemove = z.infer<typeof adGroupCriterionServiceIsRemove>;
