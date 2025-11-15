import { z } from 'zod';

export const RetargetingListServiceIsAllVisitorRule = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type RetargetingListServiceIsAllVisitorRule = z.infer<typeof RetargetingListServiceIsAllVisitorRule>;
