import { z } from 'zod';

import { DictionaryServiceLang } from './DictionaryServiceLang';

export const DictionaryServiceGeographicLocationSelector = z.object({
  lang: DictionaryServiceLang
}).nullable();

export type DictionaryServiceGeographicLocationSelector = z.infer<typeof DictionaryServiceGeographicLocationSelector>;
