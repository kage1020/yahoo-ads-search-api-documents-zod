import { z } from 'zod';

import { RetargetingListServiceCustomKey } from './RetargetingListServiceCustomKey';

export const RetargetingListServiceCustomKeyPage = z.object({
  customKeys: RetargetingListServiceCustomKey,
  totalNumEntries: z.number().int()
}).nullable();

export type RetargetingListServiceCustomKeyPage = z.infer<typeof RetargetingListServiceCustomKeyPage>;
