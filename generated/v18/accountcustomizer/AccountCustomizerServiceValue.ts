import { z } from 'zod';

import { error } from '../../common/Error';
import { accountCustomizer } from './AccountCustomizer';

export const accountCustomizerServiceValue = z.object({
  errors: z.array(error).nullable(),
  accountCustomizer: accountCustomizer,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountCustomizerServiceValue = z.infer<typeof accountCustomizerServiceValue>;
