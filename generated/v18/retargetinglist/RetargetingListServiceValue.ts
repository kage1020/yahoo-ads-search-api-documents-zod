import { z } from 'zod';

import { error } from '../../common/Error';
import { retargetingListServiceTargetingList } from './RetargetingListServiceTargetingList';

export const retargetingListServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  targetList: retargetingListServiceTargetingList
}).nullable();

export type RetargetingListServiceValue = z.infer<typeof retargetingListServiceValue>;
