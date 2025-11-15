import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceGeographicLocationPage } from './DictionaryServiceGeographicLocationPage';

export const dictionaryServiceGetGeographicLocationResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: dictionaryServiceGeographicLocationPage
}).nullable();

export type DictionaryServiceGetGeographicLocationResponse = z.infer<typeof dictionaryServiceGetGeographicLocationResponse>;
