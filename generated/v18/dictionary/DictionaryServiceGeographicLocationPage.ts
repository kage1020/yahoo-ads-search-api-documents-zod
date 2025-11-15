import { z } from 'zod';

import { dictionaryServiceGeographicLocationValue } from './DictionaryServiceGeographicLocationValue';

export const dictionaryServiceGeographicLocationPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(dictionaryServiceGeographicLocationValue).nullable()
}).nullable();

export type DictionaryServiceGeographicLocationPage = z.infer<typeof dictionaryServiceGeographicLocationPage>;
