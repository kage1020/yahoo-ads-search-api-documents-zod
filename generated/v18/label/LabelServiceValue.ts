import { z } from 'zod';

import { Error } from './Error';
import { Label } from './Label';

export const LabelServiceValue = z.object({
  errors: z.array(Error).nullable(),
  label: Label,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type LabelServiceValue = z.infer<typeof LabelServiceValue>;
