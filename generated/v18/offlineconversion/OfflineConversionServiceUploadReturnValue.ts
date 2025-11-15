import { z } from 'zod';

import { OfflineConversionServiceValue } from './OfflineConversionServiceValue';

export const OfflineConversionServiceUploadReturnValue = z.object({
  values: z.array(OfflineConversionServiceValue).nullable()
}).nullable();

export type OfflineConversionServiceUploadReturnValue = z.infer<typeof OfflineConversionServiceUploadReturnValue>;
