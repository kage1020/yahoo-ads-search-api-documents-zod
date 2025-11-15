import { z } from 'zod';

import { ConversionTrackerServiceValue } from './ConversionTrackerServiceValue';

export const ConversionTrackerServicePage = z.object({
  totalAllConversionValue: z.string().nullable(),
  totalAllConversions: z.number().int().nullable(),
  totalConversionValue: z.string().nullable(),
  totalConversions: z.number().int().nullable(),
  totalNumEntries: z.number().int(),
  values: z.array(ConversionTrackerServiceValue).nullable()
}).nullable();

export type ConversionTrackerServicePage = z.infer<typeof ConversionTrackerServicePage>;
