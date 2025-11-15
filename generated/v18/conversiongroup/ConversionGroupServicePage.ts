import { z } from 'zod';

import { conversionGroupServiceValue } from './ConversionGroupServiceValue';

export const conversionGroupServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(conversionGroupServiceValue).nullable()
}).nullable();

export type ConversionGroupServicePage = z.infer<typeof conversionGroupServicePage>;
