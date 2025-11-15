import { z } from 'zod';

import { adGroupAdLabel } from './AdGroupAdLabel';

export const adGroupAdLabelServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupAdLabel).nullable()
}).nullable();

export type AdGroupAdLabelServiceOperation = z.infer<typeof adGroupAdLabelServiceOperation>;
