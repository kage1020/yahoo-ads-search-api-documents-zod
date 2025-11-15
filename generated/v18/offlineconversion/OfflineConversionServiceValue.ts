import { z } from 'zod';

import { Error } from './Error';
import { OfflineConversionFile } from './OfflineConversionFile';

export const OfflineConversionServiceValue = z.object({
  errors: z.array(Error).nullable(),
  offlineConversion: OfflineConversionFile,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type OfflineConversionServiceValue = z.infer<typeof OfflineConversionServiceValue>;
