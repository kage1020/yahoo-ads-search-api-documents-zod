import { z } from 'zod';

import { dictionaryServiceLang } from './DictionaryServiceLang';

export const dictionaryServiceDisapprovalReason = z.object({
  description: z.string().nullable(),
  disapprovalReasonCode: z.string().nullable(),
  lang: dictionaryServiceLang,
  recommendation: z.string().nullable(),
  title: z.string().nullable()
}).nullable();

export type DictionaryServiceDisapprovalReason = z.infer<typeof dictionaryServiceDisapprovalReason>;
