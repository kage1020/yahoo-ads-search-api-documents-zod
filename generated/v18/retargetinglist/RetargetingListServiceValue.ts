import { z } from 'zod';

import { Error } from './Error';
import { RetargetingListServiceTargetingList } from './RetargetingListServiceTargetingList';

export const RetargetingListServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  targetList: RetargetingListServiceTargetingList
}).nullable();

export type RetargetingListServiceValue = z.infer<typeof RetargetingListServiceValue>;
