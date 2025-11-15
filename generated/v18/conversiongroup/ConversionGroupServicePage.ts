import { z } from 'zod';

import { ConversionGroupServiceValue } from './ConversionGroupServiceValue';

export const ConversionGroupServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(ConversionGroupServiceValue).nullable()
}).nullable();

export type ConversionGroupServicePage = z.infer<typeof ConversionGroupServicePage>;
