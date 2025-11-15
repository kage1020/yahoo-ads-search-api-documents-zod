import { z } from 'zod';

import { conversionGroupServiceConversionTrackers } from './ConversionGroupServiceConversionTrackers';

export const conversionGroup = z.object({
  accountId: z.number().int().nullable(),
  conversionGroupId: z.number().int().nullable(),
  conversionGroupName: z.string().nullable(),
  conversionTrackers: z.array(conversionGroupServiceConversionTrackers).nullable()
}).nullable();

export type ConversionGroup = z.infer<typeof conversionGroup>;
