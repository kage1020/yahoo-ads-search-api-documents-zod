import { z } from 'zod';

import { SharedCriterionServiceValue } from './SharedCriterionServiceValue';

export const SharedCriterionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(SharedCriterionServiceValue).nullable()
}).nullable();

export type SharedCriterionServicePage = z.infer<typeof SharedCriterionServicePage>;
