import { z } from 'zod';

import { AdGroupWebpageServiceValue } from './AdGroupWebpageServiceValue';

export const AdGroupWebpageServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AdGroupWebpageServiceValue).nullable()
}).nullable();

export type AdGroupWebpageServicePage = z.infer<typeof AdGroupWebpageServicePage>;
