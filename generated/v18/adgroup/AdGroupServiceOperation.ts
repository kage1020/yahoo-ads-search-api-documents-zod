import { z } from 'zod';

import { adGroup } from './AdGroup';

export const adGroupServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroup).nullable()
}).nullable();

export type AdGroupServiceOperation = z.infer<typeof adGroupServiceOperation>;
