import { z } from 'zod';

import { adGroupAdServiceValue } from './AdGroupAdServiceValue';

export const adGroupAdServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(adGroupAdServiceValue).nullable()
}).nullable();

export type AdGroupAdServicePage = z.infer<typeof adGroupAdServicePage>;
