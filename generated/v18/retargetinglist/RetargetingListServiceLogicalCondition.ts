import { z } from 'zod';

export const RetargetingListServiceLogicalCondition = z.enum(["AND", "OR", "NOT", "UNKNOWN"]).nullable();

export type RetargetingListServiceLogicalCondition = z.infer<typeof RetargetingListServiceLogicalCondition>;
