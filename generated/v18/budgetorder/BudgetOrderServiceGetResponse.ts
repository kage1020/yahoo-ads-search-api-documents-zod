import { z } from 'zod';

import { error } from '../../common/Error';
import { budgetOrderServicePage } from './BudgetOrderServicePage';

export const budgetOrderServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: budgetOrderServicePage
}).nullable();

export type BudgetOrderServiceGetResponse = z.infer<typeof budgetOrderServiceGetResponse>;
