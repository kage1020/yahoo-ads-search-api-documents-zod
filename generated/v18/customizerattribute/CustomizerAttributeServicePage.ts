import { z } from 'zod';

import { CustomizerAttributeServiceValue } from './CustomizerAttributeServiceValue';

export const CustomizerAttributeServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(CustomizerAttributeServiceValue).nullable()
}).nullable();

export type CustomizerAttributeServicePage = z.infer<typeof CustomizerAttributeServicePage>;
