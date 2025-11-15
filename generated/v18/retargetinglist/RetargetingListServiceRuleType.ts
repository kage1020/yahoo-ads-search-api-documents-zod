import { z } from 'zod';

export const retargetingListServiceRuleType = z.enum(["URL_RULE", "CUSTOM_KEY_RULE", "UNKNOWN"]).nullable();

export type RetargetingListServiceRuleType = z.infer<typeof retargetingListServiceRuleType>;
