import { z } from 'zod';

import { customizerAttribute } from './CustomizerAttribute';

export const customizerAttributeServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(customizerAttribute).nullable()
}).nullable();

export type CustomizerAttributeServiceOperation = z.infer<typeof customizerAttributeServiceOperation>;
