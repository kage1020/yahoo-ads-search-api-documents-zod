import { z } from 'zod';

import { Error } from './Error';
import { OfflineConversionServiceUploadReturnValue } from './OfflineConversionServiceUploadReturnValue';

export const OfflineConversionServiceUploadResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string().nullable(),
  rval: OfflineConversionServiceUploadReturnValue
}).nullable();

export type OfflineConversionServiceUploadResponse = z.infer<typeof OfflineConversionServiceUploadResponse>;
