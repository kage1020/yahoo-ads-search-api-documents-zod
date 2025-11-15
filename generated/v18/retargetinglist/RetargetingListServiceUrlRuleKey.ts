import { z } from 'zod';

export const retargetingListServiceUrlRuleKey = z.enum(["URL", "REFER_URL", "UNKNOWN"]).nullable();

export type RetargetingListServiceUrlRuleKey = z.infer<typeof retargetingListServiceUrlRuleKey>;
