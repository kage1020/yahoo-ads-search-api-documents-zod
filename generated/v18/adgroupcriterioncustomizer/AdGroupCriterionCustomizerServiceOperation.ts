import { z } from 'zod';

import { AdGroupCriterionCustomizer } from './AdGroupCriterionCustomizer';

export const AdGroupCriterionCustomizerServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupCriterionCustomizer).nullable()
}).nullable();

export type AdGroupCriterionCustomizerServiceOperation = z.infer<typeof AdGroupCriterionCustomizerServiceOperation>;
