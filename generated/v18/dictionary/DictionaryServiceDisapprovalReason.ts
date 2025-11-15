import { z } from 'zod';

import { DictionaryServiceLang } from './DictionaryServiceLang';

export const DictionaryServiceDisapprovalReason = z.object({
  description: z.string().nullable(),
  disapprovalReasonCode: z.string().nullable(),
  lang: DictionaryServiceLang,
  recommendation: z.string().nullable(),
  title: z.string().nullable()
}).nullable();

export type DictionaryServiceDisapprovalReason = z.infer<typeof DictionaryServiceDisapprovalReason>;
