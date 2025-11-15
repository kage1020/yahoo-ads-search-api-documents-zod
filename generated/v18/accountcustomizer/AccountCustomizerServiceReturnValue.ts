import { z } from 'zod';

import { accountCustomizerServiceValue } from './AccountCustomizerServiceValue';

export const accountCustomizerServiceReturnValue = z.object({
  values: z.array(accountCustomizerServiceValue).nullable()
}).nullable();

export type AccountCustomizerServiceReturnValue = z.infer<typeof accountCustomizerServiceReturnValue>;
