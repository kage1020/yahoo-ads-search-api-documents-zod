import { z } from 'zod';

import { Error } from './Error';
import { ConversionGroupServiceReturnValue } from './ConversionGroupServiceReturnValue';

export const ConversionGroupServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: ConversionGroupServiceReturnValue
}).nullable();

export type ConversionGroupServiceMutateResponse = z.infer<typeof ConversionGroupServiceMutateResponse>;
