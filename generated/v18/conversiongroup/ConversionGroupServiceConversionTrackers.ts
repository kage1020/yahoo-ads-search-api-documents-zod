import { z } from 'zod';

export const ConversionGroupServiceConversionTrackers = z.object({
  conversionTrackerId: z.number().int().nullable()
}).nullable();

export type ConversionGroupServiceConversionTrackers = z.infer<typeof ConversionGroupServiceConversionTrackers>;
