import { z } from 'zod';

import { adGroupAd } from './AdGroupAd';

export const adGroupAdServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupAd).nullable()
}).nullable();

export type AdGroupAdServiceOperation = z.infer<typeof adGroupAdServiceOperation>;
