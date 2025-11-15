import { z } from 'zod';

import { asset } from './Asset';

export const assetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(asset).nullable()
}).nullable();

export type AssetServiceOperation = z.infer<typeof assetServiceOperation>;
