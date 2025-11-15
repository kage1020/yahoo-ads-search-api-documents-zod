import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceDisapprovalReasonPage } from './DictionaryServiceDisapprovalReasonPage';

export const dictionaryServiceGetDisapprovalReasonResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: dictionaryServiceDisapprovalReasonPage
}).nullable();

export type DictionaryServiceGetDisapprovalReasonResponse = z.infer<typeof dictionaryServiceGetDisapprovalReasonResponse>;
