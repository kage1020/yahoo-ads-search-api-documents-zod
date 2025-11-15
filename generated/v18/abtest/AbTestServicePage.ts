import { z } from 'zod';

import { abTestServiceValue } from './AbTestServiceValue';

export const abTestServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(abTestServiceValue).nullable()
}).nullable();

export type AbTestServicePage = z.infer<typeof abTestServicePage>;
