import { z } from 'zod';

import { SsaAccount } from './SsaAccount';
import { Error } from './Error';

export const SsaAccountServiceValue = z.object({
  account: SsaAccount,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type SsaAccountServiceValue = z.infer<typeof SsaAccountServiceValue>;
