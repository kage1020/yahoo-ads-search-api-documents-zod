import { z } from 'zod';

import { Error } from './Error';
import { BudgetOrderServicePage } from './BudgetOrderServicePage';

export const BudgetOrderServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: BudgetOrderServicePage
}).nullable();

export type BudgetOrderServiceGetResponse = z.infer<typeof BudgetOrderServiceGetResponse>;
