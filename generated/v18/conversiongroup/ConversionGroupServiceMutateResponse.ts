import { z } from 'zod';

import { error } from '../../common/Error';
import { conversionGroupServiceReturnValue } from './ConversionGroupServiceReturnValue';

export const conversionGroupServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: conversionGroupServiceReturnValue
}).nullable();

export type ConversionGroupServiceMutateResponse = z.infer<typeof conversionGroupServiceMutateResponse>;
