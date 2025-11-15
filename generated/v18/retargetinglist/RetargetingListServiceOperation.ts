import { z } from 'zod';

import { retargetingListServiceTargetingList } from './RetargetingListServiceTargetingList';
import { retargetingListServiceTargetListOwner } from './RetargetingListServiceTargetListOwner';

export const retargetingListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(retargetingListServiceTargetingList).nullable(),
  targetListOwner: retargetingListServiceTargetListOwner
}).nullable();

export type RetargetingListServiceOperation = z.infer<typeof retargetingListServiceOperation>;
