import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupLabelServiceReturnValue } from './AdGroupLabelServiceReturnValue';

export const adGroupLabelServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupLabelServiceReturnValue
}).nullable();

export type AdGroupLabelServiceMutateResponse = z.infer<typeof adGroupLabelServiceMutateResponse>;
