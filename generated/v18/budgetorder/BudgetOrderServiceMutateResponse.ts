import { z } from 'zod';

import { error } from '../../common/Error';
import { budgetOrderServiceReturnValue } from './BudgetOrderServiceReturnValue';

export const budgetOrderServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: budgetOrderServiceReturnValue
}).nullable();

export type BudgetOrderServiceMutateResponse = z.infer<typeof budgetOrderServiceMutateResponse>;
