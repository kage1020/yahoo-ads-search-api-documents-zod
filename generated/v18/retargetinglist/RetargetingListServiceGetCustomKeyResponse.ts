import { z } from 'zod';

import { error } from '../../common/Error';
import { retargetingListServiceCustomKeyPage } from './RetargetingListServiceCustomKeyPage';

export const retargetingListServiceGetCustomKeyResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: retargetingListServiceCustomKeyPage
}).nullable();

export type RetargetingListServiceGetCustomKeyResponse = z.infer<typeof retargetingListServiceGetCustomKeyResponse>;
