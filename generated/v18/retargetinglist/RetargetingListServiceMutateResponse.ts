import { z } from 'zod';

import { Error } from './Error';
import { RetargetingListServiceReturnValue } from './RetargetingListServiceReturnValue';

export const RetargetingListServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: RetargetingListServiceReturnValue
}).nullable();

export type RetargetingListServiceMutateResponse = z.infer<typeof RetargetingListServiceMutateResponse>;
