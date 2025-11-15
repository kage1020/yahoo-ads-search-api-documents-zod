import { z } from 'zod';

import { ConversionGroupServiceConversionTrackers } from './ConversionGroupServiceConversionTrackers';

export const ConversionGroup = z.object({
  accountId: z.number().int().nullable(),
  conversionGroupId: z.number().int().nullable(),
  conversionGroupName: z.string().nullable(),
  conversionTrackers: z.array(ConversionGroupServiceConversionTrackers).nullable()
}).nullable();

export type ConversionGroup = z.infer<typeof ConversionGroup>;
