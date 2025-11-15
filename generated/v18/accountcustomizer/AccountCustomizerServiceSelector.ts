import { z } from 'zod';

import { accountCustomizerServiceType } from './AccountCustomizerServiceType';

export const accountCustomizerServiceSelector = z.object({
  accountId: z.number().int(),
  customizerAttributeIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(accountCustomizerServiceType).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AccountCustomizerServiceSelector = z.infer<typeof accountCustomizerServiceSelector>;
