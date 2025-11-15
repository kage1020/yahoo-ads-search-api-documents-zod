import { z } from 'zod';

export const RetargetingListServiceUrlRuleKey = z.enum(["URL", "REFER_URL", "UNKNOWN"]).nullable();

export type RetargetingListServiceUrlRuleKey = z.infer<typeof RetargetingListServiceUrlRuleKey>;
