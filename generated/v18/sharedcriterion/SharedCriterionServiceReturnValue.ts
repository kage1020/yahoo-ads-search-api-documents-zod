import { z } from 'zod';

import { sharedCriterionServiceValue } from './SharedCriterionServiceValue';

export const sharedCriterionServiceReturnValue = z.object({
  values: z.array(sharedCriterionServiceValue).nullable()
}).nullable();

export type SharedCriterionServiceReturnValue = z.infer<typeof sharedCriterionServiceReturnValue>;
