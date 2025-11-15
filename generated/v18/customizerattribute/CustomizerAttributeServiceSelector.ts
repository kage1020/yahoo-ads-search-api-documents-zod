import { z } from 'zod';

import { CustomizerAttributeServiceType } from './CustomizerAttributeServiceType';

export const CustomizerAttributeServiceSelector = z.object({
  accountId: z.number().int(),
  types: z.array(CustomizerAttributeServiceType).nullable()
}).nullable();

export type CustomizerAttributeServiceSelector = z.infer<typeof CustomizerAttributeServiceSelector>;
