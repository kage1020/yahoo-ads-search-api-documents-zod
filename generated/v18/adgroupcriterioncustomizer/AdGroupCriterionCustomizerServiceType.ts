import { z } from 'zod';

export const adGroupCriterionCustomizerServiceType = z.enum(["TEXT", "NUMBER", "PRICE", "PERCENT", "UNKNOWN"]).nullable();

export type AdGroupCriterionCustomizerServiceType = z.infer<typeof adGroupCriterionCustomizerServiceType>;
