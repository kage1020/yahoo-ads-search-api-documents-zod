import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupCustomizerServiceReturnValue } from './AdGroupCustomizerServiceReturnValue';

export const adGroupCustomizerServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupCustomizerServiceReturnValue
}).nullable();

export type AdGroupCustomizerServiceMutateResponse = z.infer<typeof adGroupCustomizerServiceMutateResponse>;
