import { z } from 'zod';

import { AbTestServiceValue } from './AbTestServiceValue';

export const AbTestServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AbTestServiceValue).nullable()
}).nullable();

export type AbTestServicePage = z.infer<typeof AbTestServicePage>;
