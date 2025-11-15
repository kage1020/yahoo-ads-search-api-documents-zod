import { z } from 'zod';

import { conversionTrackerServiceValue } from './ConversionTrackerServiceValue';

export const conversionTrackerServicePage = z.object({
  totalAllConversionValue: z.string().nullable(),
  totalAllConversions: z.number().int().nullable(),
  totalConversionValue: z.string().nullable(),
  totalConversions: z.number().int().nullable(),
  totalNumEntries: z.number().int(),
  values: z.array(conversionTrackerServiceValue).nullable()
}).nullable();

export type ConversionTrackerServicePage = z.infer<typeof conversionTrackerServicePage>;
