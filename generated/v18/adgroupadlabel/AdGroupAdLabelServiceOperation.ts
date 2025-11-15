import { z } from 'zod';

import { AdGroupAdLabel } from './AdGroupAdLabel';

export const AdGroupAdLabelServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupAdLabel).nullable()
}).nullable();

export type AdGroupAdLabelServiceOperation = z.infer<typeof AdGroupAdLabelServiceOperation>;
