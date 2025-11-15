import { z } from 'zod';

import { conversionTracker } from './ConversionTracker';

export const conversionTrackerServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(conversionTracker).nullable()
}).nullable();

export type ConversionTrackerServiceOperation = z.infer<typeof conversionTrackerServiceOperation>;
