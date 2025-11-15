import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceDisapprovalReasonPage } from './DictionaryServiceDisapprovalReasonPage';

export const DictionaryServiceGetDisapprovalReasonResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: DictionaryServiceDisapprovalReasonPage
}).nullable();

export type DictionaryServiceGetDisapprovalReasonResponse = z.infer<typeof DictionaryServiceGetDisapprovalReasonResponse>;
