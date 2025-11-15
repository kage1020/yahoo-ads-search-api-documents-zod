import { z } from 'zod';

import { OfflineConversionServiceSort } from './OfflineConversionServiceSort';

export const OfflineConversionServiceSelector = z.object({
  accountId: z.number().int().nullable(),
  uploadIds: z.array(z.number().int().nullable()).nullable(),
  sorts: z.array(OfflineConversionServiceSort).nullable(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type OfflineConversionServiceSelector = z.infer<typeof OfflineConversionServiceSelector>;
