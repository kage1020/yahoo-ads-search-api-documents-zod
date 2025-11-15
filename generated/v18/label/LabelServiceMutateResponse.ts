import { z } from 'zod';

import { Error } from './Error';
import { LabelServiceReturnValue } from './LabelServiceReturnValue';

export const LabelServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: LabelServiceReturnValue
}).nullable();

export type LabelServiceMutateResponse = z.infer<typeof LabelServiceMutateResponse>;
