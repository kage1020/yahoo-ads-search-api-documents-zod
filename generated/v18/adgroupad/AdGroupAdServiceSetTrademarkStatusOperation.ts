import { z } from 'zod';

import { AdGroupAdServiceSetTrademarkStatus } from './AdGroupAdServiceSetTrademarkStatus';

export const AdGroupAdServiceSetTrademarkStatusOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupAdServiceSetTrademarkStatus).nullable()
}).nullable();

export type AdGroupAdServiceSetTrademarkStatusOperation = z.infer<typeof AdGroupAdServiceSetTrademarkStatusOperation>;
