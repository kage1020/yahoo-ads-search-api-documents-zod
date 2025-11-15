import { z } from 'zod';

import { AccountCustomizerServiceType } from './AccountCustomizerServiceType';

export const AccountCustomizerServiceSelector = z.object({
  accountId: z.number().int(),
  customizerAttributeIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(AccountCustomizerServiceType).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AccountCustomizerServiceSelector = z.infer<typeof AccountCustomizerServiceSelector>;
