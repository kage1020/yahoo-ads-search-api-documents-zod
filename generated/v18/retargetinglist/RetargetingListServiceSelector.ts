import { z } from 'zod';

import { RetargetingListServiceTargetListOwner } from './RetargetingListServiceTargetListOwner';
import { RetargetingListServiceTargetListType } from './RetargetingListServiceTargetListType';

export const RetargetingListServiceSelector = z.object({
  accountId: z.number().int(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  targetListIds: z.array(z.number().int().nullable()).nullable(),
  targetListOwner: RetargetingListServiceTargetListOwner,
  targetListTypes: z.array(RetargetingListServiceTargetListType).nullable()
}).nullable();

export type RetargetingListServiceSelector = z.infer<typeof RetargetingListServiceSelector>;
