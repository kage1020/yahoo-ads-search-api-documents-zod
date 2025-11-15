import { z } from 'zod';

export const adGroupCriterionServiceUse = z.enum(["BIDDABLE", "NEGATIVE", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceUse = z.infer<typeof adGroupCriterionServiceUse>;
