import { z } from 'zod';

import { adGroupCustomizer } from './AdGroupCustomizer';

export const adGroupCustomizerServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupCustomizer).nullable()
}).nullable();

export type AdGroupCustomizerServiceOperation = z.infer<typeof adGroupCustomizerServiceOperation>;
