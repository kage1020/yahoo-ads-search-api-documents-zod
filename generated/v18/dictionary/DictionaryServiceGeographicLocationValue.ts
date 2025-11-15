import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceGeographicLocation } from './DictionaryServiceGeographicLocation';

export const DictionaryServiceGeographicLocationValue = z.object({
  errors: z.array(Error).nullable(),
  geographicLocation: DictionaryServiceGeographicLocation,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServiceGeographicLocationValue = z.infer<typeof DictionaryServiceGeographicLocationValue>;
