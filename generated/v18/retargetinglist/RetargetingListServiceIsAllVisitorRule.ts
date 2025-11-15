import { z } from 'zod';

export const retargetingListServiceIsAllVisitorRule = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type RetargetingListServiceIsAllVisitorRule = z.infer<typeof retargetingListServiceIsAllVisitorRule>;
