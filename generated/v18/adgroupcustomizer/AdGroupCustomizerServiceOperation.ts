import { z } from 'zod';

import { AdGroupCustomizer } from './AdGroupCustomizer';

export const AdGroupCustomizerServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupCustomizer).nullable()
}).nullable();

export type AdGroupCustomizerServiceOperation = z.infer<typeof AdGroupCustomizerServiceOperation>;
