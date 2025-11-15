import { z } from 'zod';

import { DictionaryServiceDisapprovalReasonValue } from './DictionaryServiceDisapprovalReasonValue';

export const DictionaryServiceDisapprovalReasonPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(DictionaryServiceDisapprovalReasonValue).nullable()
}).nullable();

export type DictionaryServiceDisapprovalReasonPage = z.infer<typeof DictionaryServiceDisapprovalReasonPage>;
