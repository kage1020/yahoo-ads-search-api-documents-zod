import { z } from 'zod';

import { AdGroupServiceValue } from './AdGroupServiceValue';

export const AdGroupServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AdGroupServiceValue).nullable()
}).nullable();

export type AdGroupServicePage = z.infer<typeof AdGroupServicePage>;
