import { z } from 'zod';

import { AdGroupBidMultiplier } from './AdGroupBidMultiplier';

export const AdGroupBidMultiplierServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupBidMultiplier).nullable()
}).nullable();

export type AdGroupBidMultiplierServiceOperation = z.infer<typeof AdGroupBidMultiplierServiceOperation>;
