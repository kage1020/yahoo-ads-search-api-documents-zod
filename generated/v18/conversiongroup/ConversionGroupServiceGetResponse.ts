import { z } from 'zod';

import { Error } from './Error';
import { ConversionGroupServicePage } from './ConversionGroupServicePage';

export const ConversionGroupServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: ConversionGroupServicePage
}).nullable();

export type ConversionGroupServiceGetResponse = z.infer<typeof ConversionGroupServiceGetResponse>;
