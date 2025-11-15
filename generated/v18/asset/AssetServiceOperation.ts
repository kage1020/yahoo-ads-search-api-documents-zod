import { z } from 'zod';

import { Asset } from './Asset';

export const AssetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(Asset).nullable()
}).nullable();

export type AssetServiceOperation = z.infer<typeof AssetServiceOperation>;
