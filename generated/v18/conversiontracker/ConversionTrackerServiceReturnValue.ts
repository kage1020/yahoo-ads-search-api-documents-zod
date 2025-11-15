import { z } from 'zod';

import { conversionTrackerServiceValue } from './ConversionTrackerServiceValue';

export const conversionTrackerServiceReturnValue = z.object({
  values: z.array(conversionTrackerServiceValue).nullable()
}).nullable();

export type ConversionTrackerServiceReturnValue = z.infer<typeof conversionTrackerServiceReturnValue>;
