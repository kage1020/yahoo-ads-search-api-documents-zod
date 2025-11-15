import { z } from 'zod';

import { CustomizerAttribute } from './CustomizerAttribute';

export const CustomizerAttributeServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(CustomizerAttribute).nullable()
}).nullable();

export type CustomizerAttributeServiceOperation = z.infer<typeof CustomizerAttributeServiceOperation>;
