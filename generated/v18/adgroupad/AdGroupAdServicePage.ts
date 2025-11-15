import { z } from 'zod';

import { AdGroupAdServiceValue } from './AdGroupAdServiceValue';

export const AdGroupAdServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AdGroupAdServiceValue).nullable()
}).nullable();

export type AdGroupAdServicePage = z.infer<typeof AdGroupAdServicePage>;
