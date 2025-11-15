import { z } from 'zod';

export const retargetingListServiceReachStorageStatus = z.enum(["OPEN", "CLOSED", "UNKNOWN"]).nullable();

export type RetargetingListServiceReachStorageStatus = z.infer<typeof retargetingListServiceReachStorageStatus>;
