import { z } from 'zod';

import { ConversionTrackerServiceValue } from './ConversionTrackerServiceValue';

export const ConversionTrackerServiceReturnValue = z.object({
  values: z.array(ConversionTrackerServiceValue).nullable()
}).nullable();

export type ConversionTrackerServiceReturnValue = z.infer<typeof ConversionTrackerServiceReturnValue>;
