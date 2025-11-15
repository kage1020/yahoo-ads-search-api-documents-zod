import { z } from 'zod';

import { Error } from './Error';
import { RetargetingListServiceCustomKeyPage } from './RetargetingListServiceCustomKeyPage';

export const RetargetingListServiceGetCustomKeyResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: RetargetingListServiceCustomKeyPage
}).nullable();

export type RetargetingListServiceGetCustomKeyResponse = z.infer<typeof RetargetingListServiceGetCustomKeyResponse>;
