import { z } from 'zod';

import { DictionaryServiceGeographicLocation } from './DictionaryServiceGeographicLocation';
import { DictionaryServiceGeographicLocationStatus } from './DictionaryServiceGeographicLocationStatus';

export const DictionaryServiceGeographicLocation = z.object({
  child: z.array(DictionaryServiceGeographicLocation).nullable(),
  code: z.string().nullable(),
  fullName: z.string().nullable(),
  geographicLocationStatus: DictionaryServiceGeographicLocationStatus,
  name: z.string().nullable(),
  order: z.string().nullable(),
  parent: z.string().nullable()
}).nullable();

export type DictionaryServiceGeographicLocation = z.infer<typeof DictionaryServiceGeographicLocation>;
