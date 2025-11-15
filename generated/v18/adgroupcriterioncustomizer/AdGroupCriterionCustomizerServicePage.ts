import { z } from 'zod';

import { AdGroupCriterionCustomizerServiceValue } from './AdGroupCriterionCustomizerServiceValue';

export const AdGroupCriterionCustomizerServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AdGroupCriterionCustomizerServiceValue).nullable()
}).nullable();

export type AdGroupCriterionCustomizerServicePage = z.infer<typeof AdGroupCriterionCustomizerServicePage>;
