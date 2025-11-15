import { z } from 'zod';

import { AdGroupBidMultiplierServiceValue } from './AdGroupBidMultiplierServiceValue';

export const AdGroupBidMultiplierServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AdGroupBidMultiplierServiceValue).nullable()
}).nullable();

export type AdGroupBidMultiplierServicePage = z.infer<typeof AdGroupBidMultiplierServicePage>;
