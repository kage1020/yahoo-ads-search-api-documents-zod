import { z } from 'zod';

import { adGroupWebpageServiceValue } from './AdGroupWebpageServiceValue';

export const adGroupWebpageServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(adGroupWebpageServiceValue).nullable()
}).nullable();

export type AdGroupWebpageServicePage = z.infer<typeof adGroupWebpageServicePage>;
