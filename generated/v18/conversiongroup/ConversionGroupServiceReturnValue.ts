import { z } from 'zod';

import { ConversionGroupServiceValue } from './ConversionGroupServiceValue';

export const ConversionGroupServiceReturnValue = z.object({
  values: z.array(ConversionGroupServiceValue).nullable()
}).nullable();

export type ConversionGroupServiceReturnValue = z.infer<typeof ConversionGroupServiceReturnValue>;
