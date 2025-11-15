import { z } from 'zod';

import { adGroupBidMultiplier } from './AdGroupBidMultiplier';

export const adGroupBidMultiplierServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupBidMultiplier).nullable()
}).nullable();

export type AdGroupBidMultiplierServiceOperation = z.infer<typeof adGroupBidMultiplierServiceOperation>;
