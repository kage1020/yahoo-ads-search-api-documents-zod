import { z } from 'zod';

import { dictionaryServiceLang } from './DictionaryServiceLang';

export const dictionaryServiceGeographicLocationSelector = z.object({
  lang: dictionaryServiceLang
}).nullable();

export type DictionaryServiceGeographicLocationSelector = z.infer<typeof dictionaryServiceGeographicLocationSelector>;
