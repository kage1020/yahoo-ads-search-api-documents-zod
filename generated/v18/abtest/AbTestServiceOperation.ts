import { z } from 'zod';

import { AbTest } from './AbTest';

export const AbTestServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AbTest)
}).nullable();

export type AbTestServiceOperation = z.infer<typeof AbTestServiceOperation>;
