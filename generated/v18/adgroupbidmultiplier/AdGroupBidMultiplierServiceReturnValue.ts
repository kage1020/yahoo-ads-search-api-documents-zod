import { z } from 'zod';

import { AdGroupBidMultiplierServiceValue } from './AdGroupBidMultiplierServiceValue';

export const AdGroupBidMultiplierServiceReturnValue = z.object({
  values: z.array(AdGroupBidMultiplierServiceValue).nullable()
}).nullable();

export type AdGroupBidMultiplierServiceReturnValue = z.infer<typeof AdGroupBidMultiplierServiceReturnValue>;
