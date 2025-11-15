import { z } from 'zod';

import { OfflineConversionServiceValue } from './OfflineConversionServiceValue';

export const OfflineConversionServicePage = z.object({
  totalNumEntries: z.number().int().nullable(),
  values: z.array(OfflineConversionServiceValue).nullable()
}).nullable();

export type OfflineConversionServicePage = z.infer<typeof OfflineConversionServicePage>;
