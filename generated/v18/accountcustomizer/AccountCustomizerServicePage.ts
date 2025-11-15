import { z } from 'zod';

import { AccountCustomizerServiceValue } from './AccountCustomizerServiceValue';

export const AccountCustomizerServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AccountCustomizerServiceValue).nullable()
}).nullable();

export type AccountCustomizerServicePage = z.infer<typeof AccountCustomizerServicePage>;
