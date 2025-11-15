import { z } from 'zod';

import { error } from '../../common/Error';
import { conversionGroupServicePage } from './ConversionGroupServicePage';

export const conversionGroupServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: conversionGroupServicePage
}).nullable();

export type ConversionGroupServiceGetResponse = z.infer<typeof conversionGroupServiceGetResponse>;
