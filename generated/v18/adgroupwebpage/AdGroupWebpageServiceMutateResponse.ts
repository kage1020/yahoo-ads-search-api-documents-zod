import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupWebpageServiceReturnValue } from './AdGroupWebpageServiceReturnValue';

export const adGroupWebpageServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupWebpageServiceReturnValue
}).nullable();

export type AdGroupWebpageServiceMutateResponse = z.infer<typeof adGroupWebpageServiceMutateResponse>;
