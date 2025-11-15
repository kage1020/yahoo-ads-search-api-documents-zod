import { z } from 'zod';

import { retargetingListServiceTargetListOwner } from './RetargetingListServiceTargetListOwner';
import { retargetingListServiceTargetListType } from './RetargetingListServiceTargetListType';

export const retargetingListServiceSelector = z.object({
  accountId: z.number().int(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  targetListIds: z.array(z.number().int().nullable()).nullable(),
  targetListOwner: retargetingListServiceTargetListOwner,
  targetListTypes: z.array(retargetingListServiceTargetListType).nullable()
}).nullable();

export type RetargetingListServiceSelector = z.infer<typeof retargetingListServiceSelector>;
