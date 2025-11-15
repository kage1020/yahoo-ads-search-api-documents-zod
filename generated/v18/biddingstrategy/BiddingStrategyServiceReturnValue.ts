import { z } from 'zod';

import { biddingStrategyServiceValue } from './BiddingStrategyServiceValue';

export const biddingStrategyServiceReturnValue = z.object({
  values: z.array(biddingStrategyServiceValue).nullable()
}).nullable();

export type BiddingStrategyServiceReturnValue = z.infer<typeof biddingStrategyServiceReturnValue>;
