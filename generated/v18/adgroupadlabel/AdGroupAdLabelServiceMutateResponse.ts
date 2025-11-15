import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupAdLabelServiceReturnValue } from './AdGroupAdLabelServiceReturnValue';

export const adGroupAdLabelServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupAdLabelServiceReturnValue
}).nullable();

export type AdGroupAdLabelServiceMutateResponse = z.infer<typeof adGroupAdLabelServiceMutateResponse>;
