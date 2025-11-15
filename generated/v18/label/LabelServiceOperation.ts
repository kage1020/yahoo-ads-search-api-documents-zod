import { z } from 'zod';

import { label } from './Label';

export const labelServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(label).nullable()
}).nullable();

export type LabelServiceOperation = z.infer<typeof labelServiceOperation>;
