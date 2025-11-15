import { z } from 'zod';

import { adGroupCriterionServiceValue } from './AdGroupCriterionServiceValue';

export const adGroupCriterionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(adGroupCriterionServiceValue).nullable()
}).nullable();

export type AdGroupCriterionServicePage = z.infer<typeof adGroupCriterionServicePage>;
