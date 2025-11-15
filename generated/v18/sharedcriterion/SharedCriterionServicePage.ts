import { z } from 'zod';

import { sharedCriterionServiceValue } from './SharedCriterionServiceValue';

export const sharedCriterionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(sharedCriterionServiceValue).nullable()
}).nullable();

export type SharedCriterionServicePage = z.infer<typeof sharedCriterionServicePage>;
