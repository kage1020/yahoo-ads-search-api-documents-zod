import { z } from 'zod';

import { Error } from './Error';
import { AdGroupCustomizerServiceReturnValue } from './AdGroupCustomizerServiceReturnValue';

export const AdGroupCustomizerServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupCustomizerServiceReturnValue
}).nullable();

export type AdGroupCustomizerServiceMutateResponse = z.infer<typeof AdGroupCustomizerServiceMutateResponse>;
