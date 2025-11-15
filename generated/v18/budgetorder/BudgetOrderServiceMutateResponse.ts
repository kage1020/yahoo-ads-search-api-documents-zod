import { z } from 'zod';

import { Error } from './Error';
import { BudgetOrderServiceReturnValue } from './BudgetOrderServiceReturnValue';

export const BudgetOrderServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: BudgetOrderServiceReturnValue
}).nullable();

export type BudgetOrderServiceMutateResponse = z.infer<typeof BudgetOrderServiceMutateResponse>;
