import { z } from 'zod';

import { error } from '../../common/Error';
import { labelServiceReturnValue } from './LabelServiceReturnValue';

export const labelServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: labelServiceReturnValue
}).nullable();

export type LabelServiceMutateResponse = z.infer<typeof labelServiceMutateResponse>;
