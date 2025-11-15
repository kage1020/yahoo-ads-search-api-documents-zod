import { z } from 'zod';

import { AccountCustomizerServiceValue } from './AccountCustomizerServiceValue';

export const AccountCustomizerServiceReturnValue = z.object({
  values: z.array(AccountCustomizerServiceValue).nullable()
}).nullable();

export type AccountCustomizerServiceReturnValue = z.infer<typeof AccountCustomizerServiceReturnValue>;
