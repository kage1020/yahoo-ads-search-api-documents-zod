import { z } from 'zod';

import { Error } from './Error';
import { AccountCustomizer } from './AccountCustomizer';

export const AccountCustomizerServiceValue = z.object({
  errors: z.array(Error).nullable(),
  accountCustomizer: AccountCustomizer,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountCustomizerServiceValue = z.infer<typeof AccountCustomizerServiceValue>;
