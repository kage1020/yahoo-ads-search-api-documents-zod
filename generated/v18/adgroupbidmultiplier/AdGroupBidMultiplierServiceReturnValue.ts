import { z } from 'zod';

import { adGroupBidMultiplierServiceValue } from './AdGroupBidMultiplierServiceValue';

export const adGroupBidMultiplierServiceReturnValue = z.object({
  values: z.array(adGroupBidMultiplierServiceValue).nullable()
}).nullable();

export type AdGroupBidMultiplierServiceReturnValue = z.infer<typeof adGroupBidMultiplierServiceReturnValue>;
