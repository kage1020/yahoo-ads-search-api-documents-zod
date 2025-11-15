import { z } from 'zod';

export const retargetingListServiceLogicalCondition = z.enum(["AND", "OR", "NOT", "UNKNOWN"]).nullable();

export type RetargetingListServiceLogicalCondition = z.infer<typeof retargetingListServiceLogicalCondition>;
