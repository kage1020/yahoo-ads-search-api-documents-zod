import { z } from 'zod';

import { retargetingListServiceCustomKey } from './RetargetingListServiceCustomKey';

export const retargetingListServiceCustomKeyPage = z.object({
  customKeys: retargetingListServiceCustomKey,
  totalNumEntries: z.number().int()
}).nullable();

export type RetargetingListServiceCustomKeyPage = z.infer<typeof retargetingListServiceCustomKeyPage>;
