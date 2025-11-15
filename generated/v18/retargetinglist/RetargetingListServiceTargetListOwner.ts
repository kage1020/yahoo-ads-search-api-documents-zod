import { z } from 'zod';

export const retargetingListServiceTargetListOwner = z.enum(["OWNER", "SHARED", "UNKNOWN"]).nullable();

export type RetargetingListServiceTargetListOwner = z.infer<typeof retargetingListServiceTargetListOwner>;
