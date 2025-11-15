import { z } from 'zod';

export const AdGroupCriterionServiceIsRemove = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceIsRemove = z.infer<typeof AdGroupCriterionServiceIsRemove>;
