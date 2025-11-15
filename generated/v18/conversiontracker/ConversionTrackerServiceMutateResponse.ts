import { z } from 'zod';

import { error } from '../../common/Error';
import { conversionTrackerServiceReturnValue } from './ConversionTrackerServiceReturnValue';

export const conversionTrackerServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: conversionTrackerServiceReturnValue
}).nullable();

export type ConversionTrackerServiceMutateResponse = z.infer<typeof conversionTrackerServiceMutateResponse>;
