import { z } from 'zod';

import { Error } from './Error';
import { RetargetingListServicePage } from './RetargetingListServicePage';

export const RetargetingListServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: RetargetingListServicePage
}).nullable();

export type RetargetingListServiceGetResponse = z.infer<typeof RetargetingListServiceGetResponse>;
