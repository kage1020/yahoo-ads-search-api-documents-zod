import { z } from 'zod';

import { assetServiceSetTrademarkStatus } from './AssetServiceSetTrademarkStatus';

export const assetServiceSetTrademarkStatusOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(assetServiceSetTrademarkStatus).nullable()
}).nullable();

export type AssetServiceSetTrademarkStatusOperation = z.infer<typeof assetServiceSetTrademarkStatusOperation>;
