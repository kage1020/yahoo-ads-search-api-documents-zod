import { z } from 'zod';

import { conversionTracker } from './ConversionTracker';
import { error } from '../../common/Error';

export const conversionTrackerServiceValue = z.object({
  conversionTracker: conversionTracker,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type ConversionTrackerServiceValue = z.infer<typeof conversionTrackerServiceValue>;
