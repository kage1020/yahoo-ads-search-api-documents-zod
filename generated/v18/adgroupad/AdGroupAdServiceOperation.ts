import { z } from 'zod';

import { AdGroupAd } from './AdGroupAd';

export const AdGroupAdServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupAd).nullable()
}).nullable();

export type AdGroupAdServiceOperation = z.infer<typeof AdGroupAdServiceOperation>;
