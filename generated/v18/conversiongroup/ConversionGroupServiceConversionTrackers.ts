import { z } from 'zod';

export const conversionGroupServiceConversionTrackers = z.object({
  conversionTrackerId: z.number().int().nullable()
}).nullable();

export type ConversionGroupServiceConversionTrackers = z.infer<typeof conversionGroupServiceConversionTrackers>;
