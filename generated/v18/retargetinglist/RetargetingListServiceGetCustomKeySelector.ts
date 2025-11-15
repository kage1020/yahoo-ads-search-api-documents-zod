import { z } from 'zod';

import { retargetingListServiceTargetListOwner } from './RetargetingListServiceTargetListOwner';

export const retargetingListServiceGetCustomKeySelector = z.object({
  accountId: z.number().int(),
  targetListOwner: retargetingListServiceTargetListOwner
}).nullable();

export type RetargetingListServiceGetCustomKeySelector = z.infer<typeof retargetingListServiceGetCustomKeySelector>;
