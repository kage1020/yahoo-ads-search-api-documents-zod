import { z } from 'zod';

import { dictionaryServiceDisapprovalReason } from './DictionaryServiceDisapprovalReason';
import { error } from '../../common/Error';

export const dictionaryServiceDisapprovalReasonValue = z.object({
  disapprovalReason: dictionaryServiceDisapprovalReason,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServiceDisapprovalReasonValue = z.infer<typeof dictionaryServiceDisapprovalReasonValue>;
