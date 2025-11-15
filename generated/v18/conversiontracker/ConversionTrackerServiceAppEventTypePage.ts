import { z } from 'zod';

import { ConversionTrackerServiceAppEventTypeValue } from './ConversionTrackerServiceAppEventTypeValue';

export const ConversionTrackerServiceAppEventTypePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(ConversionTrackerServiceAppEventTypeValue).nullable()
}).nullable();

export type ConversionTrackerServiceAppEventTypePage = z.infer<typeof ConversionTrackerServiceAppEventTypePage>;
