import { z } from 'zod';

import { offlineConversionServiceValue } from './OfflineConversionServiceValue';

export const offlineConversionServiceUploadReturnValue = z.object({
  values: z.array(offlineConversionServiceValue).nullable()
}).nullable();

export type OfflineConversionServiceUploadReturnValue = z.infer<typeof offlineConversionServiceUploadReturnValue>;
