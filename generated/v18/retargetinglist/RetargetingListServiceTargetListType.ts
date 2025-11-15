import { z } from 'zod';

export const retargetingListServiceTargetListType = z.enum(["DEFAULT", "RULE", "LOGICAL", "UNKNOWN"]).nullable();

export type RetargetingListServiceTargetListType = z.infer<typeof retargetingListServiceTargetListType>;
