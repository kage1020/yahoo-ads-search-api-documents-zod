import { z } from 'zod';

import { RetargetingListServiceValue } from './RetargetingListServiceValue';

export const RetargetingListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(RetargetingListServiceValue).nullable()
}).nullable();

export type RetargetingListServicePage = z.infer<typeof RetargetingListServicePage>;
