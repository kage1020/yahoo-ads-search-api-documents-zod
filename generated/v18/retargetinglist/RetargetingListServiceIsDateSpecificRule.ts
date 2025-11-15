import { z } from 'zod';

export const retargetingListServiceIsDateSpecificRule = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type RetargetingListServiceIsDateSpecificRule = z.infer<typeof retargetingListServiceIsDateSpecificRule>;
