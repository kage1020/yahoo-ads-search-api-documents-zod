import { z } from 'zod';

import { adGroupBidMultiplierServiceValue } from './AdGroupBidMultiplierServiceValue';

export const adGroupBidMultiplierServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(adGroupBidMultiplierServiceValue).nullable()
}).nullable();

export type AdGroupBidMultiplierServicePage = z.infer<typeof adGroupBidMultiplierServicePage>;
