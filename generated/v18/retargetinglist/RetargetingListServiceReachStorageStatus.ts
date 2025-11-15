import { z } from 'zod';

export const RetargetingListServiceReachStorageStatus = z.enum(["OPEN", "CLOSED", "UNKNOWN"]).nullable();

export type RetargetingListServiceReachStorageStatus = z.infer<typeof RetargetingListServiceReachStorageStatus>;
