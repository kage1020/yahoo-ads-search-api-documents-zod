import { z } from 'zod';

import { CustomizerAttributeServiceType } from './CustomizerAttributeServiceType';

export const CustomizerAttribute = z.object({
  accountId: z.number().int().nullable(),
  customizerAttributeId: z.number().int().nullable(),
  name: z.string().nullable(),
  type: CustomizerAttributeServiceType
}).nullable();

export type CustomizerAttribute = z.infer<typeof CustomizerAttribute>;
