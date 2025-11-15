import { z } from 'zod';

import { AdGroupCriterionServiceValue } from './AdGroupCriterionServiceValue';

export const AdGroupCriterionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AdGroupCriterionServiceValue).nullable()
}).nullable();

export type AdGroupCriterionServicePage = z.infer<typeof AdGroupCriterionServicePage>;
