import { z } from 'zod';

import { ssaAccount } from './SsaAccount';
import { error } from '../../common/Error';

export const ssaAccountServiceValue = z.object({
  account: ssaAccount,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type SsaAccountServiceValue = z.infer<typeof ssaAccountServiceValue>;
