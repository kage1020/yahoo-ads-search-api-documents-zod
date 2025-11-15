import { z } from 'zod';

import { adGroupAdServiceSetTrademarkStatus } from './AdGroupAdServiceSetTrademarkStatus';

export const adGroupAdServiceSetTrademarkStatusOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupAdServiceSetTrademarkStatus).nullable()
}).nullable();

export type AdGroupAdServiceSetTrademarkStatusOperation = z.infer<typeof adGroupAdServiceSetTrademarkStatusOperation>;
