import { z } from 'zod';

import { CustomizerAttributeServiceValue } from './CustomizerAttributeServiceValue';

export const CustomizerAttributeServiceReturnValue = z.object({
  values: z.array(CustomizerAttributeServiceValue).nullable()
}).nullable();

export type CustomizerAttributeServiceReturnValue = z.infer<typeof CustomizerAttributeServiceReturnValue>;
