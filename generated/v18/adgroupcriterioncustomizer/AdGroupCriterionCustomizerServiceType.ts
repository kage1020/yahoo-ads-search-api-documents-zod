import { z } from 'zod';

export const AdGroupCriterionCustomizerServiceType = z.enum(["TEXT", "NUMBER", "PRICE", "PERCENT", "UNKNOWN"]).nullable();

export type AdGroupCriterionCustomizerServiceType = z.infer<typeof AdGroupCriterionCustomizerServiceType>;
