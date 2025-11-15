import { z } from 'zod';

import { Label } from './Label';

export const LabelServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(Label).nullable()
}).nullable();

export type LabelServiceOperation = z.infer<typeof LabelServiceOperation>;
