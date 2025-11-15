import { z } from 'zod';

import { conversionTrackerServiceAppEventTypeValue } from './ConversionTrackerServiceAppEventTypeValue';

export const conversionTrackerServiceAppEventTypePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(conversionTrackerServiceAppEventTypeValue).nullable()
}).nullable();

export type ConversionTrackerServiceAppEventTypePage = z.infer<typeof conversionTrackerServiceAppEventTypePage>;
