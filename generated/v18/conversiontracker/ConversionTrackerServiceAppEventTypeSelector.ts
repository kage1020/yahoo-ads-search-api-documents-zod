import { z } from 'zod';

export const conversionTrackerServiceAppEventTypeSelector = z.object({
  accountId: z.number().int(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type ConversionTrackerServiceAppEventTypeSelector = z.infer<typeof conversionTrackerServiceAppEventTypeSelector>;
