import { z } from 'zod';

import { adGroupLabel } from './AdGroupLabel';

export const adGroupLabelServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupLabel).nullable()
}).nullable();

export type AdGroupLabelServiceOperation = z.infer<typeof adGroupLabelServiceOperation>;
