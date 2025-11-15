import { z } from 'zod';

import { AdGroupLabel } from './AdGroupLabel';

export const AdGroupLabelServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupLabel).nullable()
}).nullable();

export type AdGroupLabelServiceOperation = z.infer<typeof AdGroupLabelServiceOperation>;
