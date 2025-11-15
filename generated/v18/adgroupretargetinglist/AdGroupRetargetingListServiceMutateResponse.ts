import { z } from 'zod';

import { Error } from './Error';
import { AdGroupRetargetingListServiceReturnValue } from './AdGroupRetargetingListServiceReturnValue';

export const AdGroupRetargetingListServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupRetargetingListServiceReturnValue
}).nullable();

export type AdGroupRetargetingListServiceMutateResponse = z.infer<typeof AdGroupRetargetingListServiceMutateResponse>;
