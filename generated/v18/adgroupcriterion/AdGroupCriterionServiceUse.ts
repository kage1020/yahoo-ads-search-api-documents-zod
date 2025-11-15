import { z } from 'zod';

export const AdGroupCriterionServiceUse = z.enum(["BIDDABLE", "NEGATIVE", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceUse = z.infer<typeof AdGroupCriterionServiceUse>;
