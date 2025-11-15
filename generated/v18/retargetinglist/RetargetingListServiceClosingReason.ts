import { z } from 'zod';

export const retargetingListServiceClosingReason = z.enum(["UNUSED_LIST", "UNKNOWN"]).nullable();

export type RetargetingListServiceClosingReason = z.infer<typeof retargetingListServiceClosingReason>;
