import { z } from 'zod';

import { AssetServiceSetTrademarkStatus } from './AssetServiceSetTrademarkStatus';

export const AssetServiceSetTrademarkStatusOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AssetServiceSetTrademarkStatus).nullable()
}).nullable();

export type AssetServiceSetTrademarkStatusOperation = z.infer<typeof AssetServiceSetTrademarkStatusOperation>;
