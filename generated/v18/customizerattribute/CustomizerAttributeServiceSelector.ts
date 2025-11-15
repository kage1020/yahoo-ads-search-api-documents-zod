import { z } from 'zod';

import { customizerAttributeServiceType } from './CustomizerAttributeServiceType';

export const customizerAttributeServiceSelector = z.object({
  accountId: z.number().int(),
  types: z.array(customizerAttributeServiceType).nullable()
}).nullable();

export type CustomizerAttributeServiceSelector = z.infer<typeof customizerAttributeServiceSelector>;
