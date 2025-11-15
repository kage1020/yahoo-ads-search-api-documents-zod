import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupRetargetingListServiceReturnValue } from './AdGroupRetargetingListServiceReturnValue';

export const adGroupRetargetingListServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupRetargetingListServiceReturnValue
}).nullable();

export type AdGroupRetargetingListServiceMutateResponse = z.infer<typeof adGroupRetargetingListServiceMutateResponse>;
