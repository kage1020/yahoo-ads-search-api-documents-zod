import { z } from 'zod';

import { adGroupCriterionCustomizer } from './AdGroupCriterionCustomizer';

export const adGroupCriterionCustomizerServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupCriterionCustomizer).nullable()
}).nullable();

export type AdGroupCriterionCustomizerServiceOperation = z.infer<typeof adGroupCriterionCustomizerServiceOperation>;
