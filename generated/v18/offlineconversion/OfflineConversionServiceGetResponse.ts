import { z } from 'zod';

import { error } from '../../common/Error';
import { offlineConversionServicePage } from './OfflineConversionServicePage';

export const offlineConversionServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string().nullable(),
  rval: offlineConversionServicePage
}).nullable();

export type OfflineConversionServiceGetResponse = z.infer<typeof offlineConversionServiceGetResponse>;
