import { z } from 'zod';

import { error } from '../../common/Error';
import { retargetingListServiceReturnValue } from './RetargetingListServiceReturnValue';

export const retargetingListServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: retargetingListServiceReturnValue
}).nullable();

export type RetargetingListServiceMutateResponse = z.infer<typeof retargetingListServiceMutateResponse>;
