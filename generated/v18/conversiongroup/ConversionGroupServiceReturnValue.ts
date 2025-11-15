import { z } from 'zod';

import { conversionGroupServiceValue } from './ConversionGroupServiceValue';

export const conversionGroupServiceReturnValue = z.object({
  values: z.array(conversionGroupServiceValue).nullable()
}).nullable();

export type ConversionGroupServiceReturnValue = z.infer<typeof conversionGroupServiceReturnValue>;
