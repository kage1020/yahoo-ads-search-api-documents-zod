import { z } from 'zod';

import { offlineConversionServiceValue } from './OfflineConversionServiceValue';

export const offlineConversionServicePage = z.object({
  totalNumEntries: z.number().int().nullable(),
  values: z.array(offlineConversionServiceValue).nullable()
}).nullable();

export type OfflineConversionServicePage = z.infer<typeof offlineConversionServicePage>;
