import { z } from 'zod';

export const retargetingListServiceRuleOperator = z.enum(["UNKNOWN", "EQUALS", "NOT_EQUAL", "CONTAINS", "NOT_CONTAIN", "STARTS_WITH", "NOT_START_WITH", "ENDS_WITH", "NOT_END_WITH"]).nullable();

export type RetargetingListServiceRuleOperator = z.infer<typeof retargetingListServiceRuleOperator>;
