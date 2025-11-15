import { z } from 'zod';

import { adGroupServiceValue } from './AdGroupServiceValue';

export const adGroupServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(adGroupServiceValue).nullable()
}).nullable();

export type AdGroupServicePage = z.infer<typeof adGroupServicePage>;
