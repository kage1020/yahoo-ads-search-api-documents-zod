import { z } from 'zod';

import { BiddingStrategyServiceValue } from './BiddingStrategyServiceValue';

export const BiddingStrategyServiceReturnValue = z.object({
  values: z.array(BiddingStrategyServiceValue).nullable()
}).nullable();

export type BiddingStrategyServiceReturnValue = z.infer<typeof BiddingStrategyServiceReturnValue>;
