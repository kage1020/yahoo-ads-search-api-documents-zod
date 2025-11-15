import { z } from 'zod';

import { conversionGroup } from './ConversionGroup';

export const conversionGroupServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(conversionGroup)
}).nullable();

export type ConversionGroupServiceOperation = z.infer<typeof conversionGroupServiceOperation>;
