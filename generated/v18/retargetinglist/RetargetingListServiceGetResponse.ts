import { z } from 'zod';

import { error } from '../../common/Error';
import { retargetingListServicePage } from './RetargetingListServicePage';

export const retargetingListServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: retargetingListServicePage
}).nullable();

export type RetargetingListServiceGetResponse = z.infer<typeof retargetingListServiceGetResponse>;
