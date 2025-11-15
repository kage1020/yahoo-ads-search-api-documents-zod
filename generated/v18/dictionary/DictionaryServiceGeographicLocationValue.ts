import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceGeographicLocation } from './DictionaryServiceGeographicLocation';

export const dictionaryServiceGeographicLocationValue = z.object({
  errors: z.array(error).nullable(),
  geographicLocation: dictionaryServiceGeographicLocation,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServiceGeographicLocationValue = z.infer<typeof dictionaryServiceGeographicLocationValue>;
