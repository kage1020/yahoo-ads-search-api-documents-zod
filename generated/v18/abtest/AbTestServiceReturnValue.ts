import { z } from 'zod';

import { AbTestServiceValue } from './AbTestServiceValue';

export const AbTestServiceReturnValue = z.object({
  values: z.array(AbTestServiceValue).nullable()
}).nullable();

export type AbTestServiceReturnValue = z.infer<typeof AbTestServiceReturnValue>;
