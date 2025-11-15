import { z } from 'zod';

import { Error } from './Error';
import { ConversionTrackerServiceAppEventTypePage } from './ConversionTrackerServiceAppEventTypePage';

export const ConversionTrackerServiceGetAppEventTypeResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: ConversionTrackerServiceAppEventTypePage
}).nullable();

export type ConversionTrackerServiceGetAppEventTypeResponse = z.infer<typeof ConversionTrackerServiceGetAppEventTypeResponse>;
