import { z } from 'zod';

export const RetargetingListServiceTargetListOwner = z.enum(["OWNER", "SHARED", "UNKNOWN"]).nullable();

export type RetargetingListServiceTargetListOwner = z.infer<typeof RetargetingListServiceTargetListOwner>;
