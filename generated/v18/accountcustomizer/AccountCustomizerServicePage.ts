import { z } from 'zod';

import { accountCustomizerServiceValue } from './AccountCustomizerServiceValue';

export const accountCustomizerServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(accountCustomizerServiceValue).nullable()
}).nullable();

export type AccountCustomizerServicePage = z.infer<typeof accountCustomizerServicePage>;
