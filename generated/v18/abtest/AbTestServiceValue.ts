import { z } from 'zod';

import { AbTest } from './AbTest';
import { Error } from './Error';

export const AbTestServiceValue = z.object({
  abTest: AbTest,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AbTestServiceValue = z.infer<typeof AbTestServiceValue>;
