import { z } from 'zod';

import { retargetingListServiceValue } from './RetargetingListServiceValue';

export const retargetingListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(retargetingListServiceValue).nullable()
}).nullable();

export type RetargetingListServicePage = z.infer<typeof retargetingListServicePage>;
