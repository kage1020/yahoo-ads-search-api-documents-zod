import { z } from 'zod';

import { account } from './Account';
import { error } from '../../common/Error';

export const accountServiceValue = z.object({
  account: account,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountServiceValue = z.infer<typeof accountServiceValue>;
