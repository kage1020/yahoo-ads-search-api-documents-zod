import { z } from 'zod';

import { ConversionGroup } from './ConversionGroup';

export const ConversionGroupServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(ConversionGroup)
}).nullable();

export type ConversionGroupServiceOperation = z.infer<typeof ConversionGroupServiceOperation>;
