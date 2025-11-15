import { z } from 'zod';

import { RetargetingListServiceTargetListOwner } from './RetargetingListServiceTargetListOwner';

export const RetargetingListServiceGetCustomKeySelector = z.object({
  accountId: z.number().int(),
  targetListOwner: RetargetingListServiceTargetListOwner
}).nullable();

export type RetargetingListServiceGetCustomKeySelector = z.infer<typeof RetargetingListServiceGetCustomKeySelector>;
