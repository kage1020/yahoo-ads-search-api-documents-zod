import { z } from 'zod';

import { error } from '../../common/Error';
import { label } from './Label';

export const labelServiceValue = z.object({
  errors: z.array(error).nullable(),
  label: label,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type LabelServiceValue = z.infer<typeof labelServiceValue>;
