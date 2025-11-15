import { z } from 'zod';

import { SharedCriterionServiceValue } from './SharedCriterionServiceValue';

export const SharedCriterionServiceReturnValue = z.object({
  values: z.array(SharedCriterionServiceValue).nullable()
}).nullable();

export type SharedCriterionServiceReturnValue = z.infer<typeof SharedCriterionServiceReturnValue>;
