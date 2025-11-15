import { z } from 'zod';

import { AdGroup } from './AdGroup';

export const AdGroupServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroup).nullable()
}).nullable();

export type AdGroupServiceOperation = z.infer<typeof AdGroupServiceOperation>;
