import { z } from 'zod';

import { DictionaryServiceLang } from './DictionaryServiceLang';

export const DictionaryServiceDisapprovalReasonSelector = z.object({
  lang: DictionaryServiceLang,
  numberResults: z.number().int().min(1).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type DictionaryServiceDisapprovalReasonSelector = z.infer<typeof DictionaryServiceDisapprovalReasonSelector>;
