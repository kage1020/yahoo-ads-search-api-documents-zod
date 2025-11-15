import { z } from 'zod';

import { RetargetingListServiceTargetingList } from './RetargetingListServiceTargetingList';
import { RetargetingListServiceTargetListOwner } from './RetargetingListServiceTargetListOwner';

export const RetargetingListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(RetargetingListServiceTargetingList).nullable(),
  targetListOwner: RetargetingListServiceTargetListOwner
}).nullable();

export type RetargetingListServiceOperation = z.infer<typeof RetargetingListServiceOperation>;
