import { z } from 'zod';

export const RetargetingListServiceIsDateSpecificRule = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type RetargetingListServiceIsDateSpecificRule = z.infer<typeof RetargetingListServiceIsDateSpecificRule>;
