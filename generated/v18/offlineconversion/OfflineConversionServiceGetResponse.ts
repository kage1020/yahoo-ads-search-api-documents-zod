import { z } from 'zod';

import { Error } from './Error';
import { OfflineConversionServicePage } from './OfflineConversionServicePage';

export const OfflineConversionServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string().nullable(),
  rval: OfflineConversionServicePage
}).nullable();

export type OfflineConversionServiceGetResponse = z.infer<typeof OfflineConversionServiceGetResponse>;
