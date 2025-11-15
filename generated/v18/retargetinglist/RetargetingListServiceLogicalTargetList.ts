import { z } from 'zod';

import { RetargetingListServiceLogicalGroup } from './RetargetingListServiceLogicalGroup';

export const RetargetingListServiceLogicalTargetList = z.object({
  logicalGroup: z.array(RetargetingListServiceLogicalGroup).nullable()
}).nullable();

export type RetargetingListServiceLogicalTargetList = z.infer<typeof RetargetingListServiceLogicalTargetList>;
