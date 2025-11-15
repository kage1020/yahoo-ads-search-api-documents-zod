import { z } from 'zod';

import { customizerAttributeServiceValue } from './CustomizerAttributeServiceValue';

export const customizerAttributeServiceReturnValue = z.object({
  values: z.array(customizerAttributeServiceValue).nullable()
}).nullable();

export type CustomizerAttributeServiceReturnValue = z.infer<typeof customizerAttributeServiceReturnValue>;
