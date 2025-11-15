import { z } from 'zod';

import { customizerAttributeServiceType } from './CustomizerAttributeServiceType';

export const customizerAttribute = z.object({
  accountId: z.number().int().nullable(),
  customizerAttributeId: z.number().int().nullable(),
  name: z.string().nullable(),
  type: customizerAttributeServiceType
}).nullable();

export type CustomizerAttribute = z.infer<typeof customizerAttribute>;
