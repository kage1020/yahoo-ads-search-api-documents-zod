import { z } from 'zod';

import { error } from '../../common/Error';
import { offlineConversionServiceUploadReturnValue } from './OfflineConversionServiceUploadReturnValue';

export const offlineConversionServiceUploadResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string().nullable(),
  rval: offlineConversionServiceUploadReturnValue
}).nullable();

export type OfflineConversionServiceUploadResponse = z.infer<typeof offlineConversionServiceUploadResponse>;
