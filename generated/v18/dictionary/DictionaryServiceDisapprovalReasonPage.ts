import { z } from 'zod';

import { dictionaryServiceDisapprovalReasonValue } from './DictionaryServiceDisapprovalReasonValue';

export const dictionaryServiceDisapprovalReasonPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(dictionaryServiceDisapprovalReasonValue).nullable()
}).nullable();

export type DictionaryServiceDisapprovalReasonPage = z.infer<typeof dictionaryServiceDisapprovalReasonPage>;
