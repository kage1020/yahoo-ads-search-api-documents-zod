import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceGeographicLocationPage } from './DictionaryServiceGeographicLocationPage';

export const DictionaryServiceGetGeographicLocationResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: DictionaryServiceGeographicLocationPage
}).nullable();

export type DictionaryServiceGetGeographicLocationResponse = z.infer<typeof DictionaryServiceGetGeographicLocationResponse>;
