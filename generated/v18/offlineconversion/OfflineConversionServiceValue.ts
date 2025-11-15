import { z } from 'zod';

import { error } from '../../common/Error';
import { offlineConversionFile } from './OfflineConversionFile';

export const offlineConversionServiceValue = z.object({
  errors: z.array(error).nullable(),
  offlineConversion: offlineConversionFile,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type OfflineConversionServiceValue = z.infer<typeof offlineConversionServiceValue>;
