import { z } from 'zod';

import { Error } from './Error';
import { ConversionTrackerServiceReturnValue } from './ConversionTrackerServiceReturnValue';

export const ConversionTrackerServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: ConversionTrackerServiceReturnValue
}).nullable();

export type ConversionTrackerServiceMutateResponse = z.infer<typeof ConversionTrackerServiceMutateResponse>;
