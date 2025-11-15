import { z } from 'zod';

import { ConversionGroup } from './ConversionGroup';
import { Error } from './Error';

export const ConversionGroupServiceValue = z.object({
  conversionGroup: ConversionGroup,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type ConversionGroupServiceValue = z.infer<typeof ConversionGroupServiceValue>;
