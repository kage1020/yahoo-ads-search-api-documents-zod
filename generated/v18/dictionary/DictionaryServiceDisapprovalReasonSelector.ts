import { z } from 'zod';

import { dictionaryServiceLang } from './DictionaryServiceLang';

export const dictionaryServiceDisapprovalReasonSelector = z.object({
  lang: dictionaryServiceLang,
  numberResults: z.number().int().min(1).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type DictionaryServiceDisapprovalReasonSelector = z.infer<typeof dictionaryServiceDisapprovalReasonSelector>;
