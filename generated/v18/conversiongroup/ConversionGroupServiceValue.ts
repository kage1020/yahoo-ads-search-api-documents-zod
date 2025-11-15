import { z } from 'zod';

import { conversionGroup } from './ConversionGroup';
import { error } from '../../common/Error';

export const conversionGroupServiceValue = z.object({
  conversionGroup: conversionGroup,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type ConversionGroupServiceValue = z.infer<typeof conversionGroupServiceValue>;
