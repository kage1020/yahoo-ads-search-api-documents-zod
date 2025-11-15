import { z } from 'zod';

export const RetargetingListServiceClosingReason = z.enum(["UNUSED_LIST", "UNKNOWN"]).nullable();

export type RetargetingListServiceClosingReason = z.infer<typeof RetargetingListServiceClosingReason>;
