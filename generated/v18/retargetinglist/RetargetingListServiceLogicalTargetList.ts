import { z } from 'zod';

import { retargetingListServiceLogicalGroup } from './RetargetingListServiceLogicalGroup';

export const retargetingListServiceLogicalTargetList = z.object({
  logicalGroup: z.array(retargetingListServiceLogicalGroup).nullable()
}).nullable();

export type RetargetingListServiceLogicalTargetList = z.infer<typeof retargetingListServiceLogicalTargetList>;
