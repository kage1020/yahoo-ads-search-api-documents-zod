import { z } from 'zod';

import { customizerAttributeServiceValue } from './CustomizerAttributeServiceValue';

export const customizerAttributeServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(customizerAttributeServiceValue).nullable()
}).nullable();

export type CustomizerAttributeServicePage = z.infer<typeof customizerAttributeServicePage>;
