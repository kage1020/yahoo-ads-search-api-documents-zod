import { z } from 'zod';

import { DictionaryServiceDisapprovalReason } from './DictionaryServiceDisapprovalReason';
import { Error } from './Error';

export const DictionaryServiceDisapprovalReasonValue = z.object({
  disapprovalReason: DictionaryServiceDisapprovalReason,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServiceDisapprovalReasonValue = z.infer<typeof DictionaryServiceDisapprovalReasonValue>;
