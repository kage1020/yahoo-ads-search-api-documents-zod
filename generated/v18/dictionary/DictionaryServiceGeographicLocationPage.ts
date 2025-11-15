import { z } from 'zod';

import { DictionaryServiceGeographicLocationValue } from './DictionaryServiceGeographicLocationValue';

export const DictionaryServiceGeographicLocationPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(DictionaryServiceGeographicLocationValue).nullable()
}).nullable();

export type DictionaryServiceGeographicLocationPage = z.infer<typeof DictionaryServiceGeographicLocationPage>;
