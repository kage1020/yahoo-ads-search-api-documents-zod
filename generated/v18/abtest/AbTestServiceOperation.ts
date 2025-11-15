import { z } from 'zod';

import { abTest } from './AbTest';

export const abTestServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(abTest)
}).nullable();

export type AbTestServiceOperation = z.infer<typeof abTestServiceOperation>;
