import { z } from 'zod';

export const RetargetingListServiceTargetListType = z.enum(["DEFAULT", "RULE", "LOGICAL", "UNKNOWN"]).nullable();

export type RetargetingListServiceTargetListType = z.infer<typeof RetargetingListServiceTargetListType>;
