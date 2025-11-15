import { z } from 'zod';

import { Error } from './Error';
import { CustomizerAttributeServiceReturnValue } from './CustomizerAttributeServiceReturnValue';

export const CustomizerAttributeServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CustomizerAttributeServiceReturnValue
}).nullable();

export type CustomizerAttributeServiceMutateResponse = z.infer<typeof CustomizerAttributeServiceMutateResponse>;
