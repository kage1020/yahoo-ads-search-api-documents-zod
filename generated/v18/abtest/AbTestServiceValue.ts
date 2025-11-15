import { z } from 'zod';

import { abTest } from './AbTest';
import { error } from '../../common/Error';

export const abTestServiceValue = z.object({
  abTest: abTest,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AbTestServiceValue = z.infer<typeof abTestServiceValue>;
