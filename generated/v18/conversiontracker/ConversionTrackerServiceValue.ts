import { z } from 'zod';

import { ConversionTracker } from './ConversionTracker';
import { Error } from './Error';

export const ConversionTrackerServiceValue = z.object({
  conversionTracker: ConversionTracker,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type ConversionTrackerServiceValue = z.infer<typeof ConversionTrackerServiceValue>;
