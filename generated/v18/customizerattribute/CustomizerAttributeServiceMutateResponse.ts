import { z } from 'zod';

import { error } from '../../common/Error';
import { customizerAttributeServiceReturnValue } from './CustomizerAttributeServiceReturnValue';

export const customizerAttributeServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: customizerAttributeServiceReturnValue
}).nullable();

export type CustomizerAttributeServiceMutateResponse = z.infer<typeof customizerAttributeServiceMutateResponse>;
