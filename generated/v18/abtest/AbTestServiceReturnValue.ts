import { z } from 'zod';

import { abTestServiceValue } from './AbTestServiceValue';

export const abTestServiceReturnValue = z.object({
  values: z.array(abTestServiceValue).nullable()
}).nullable();

export type AbTestServiceReturnValue = z.infer<typeof abTestServiceReturnValue>;
