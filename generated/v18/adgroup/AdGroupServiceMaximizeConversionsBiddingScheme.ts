import { z } from 'zod';

import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const adGroupServiceMaximizeConversionsBiddingScheme = z.object({
  targetCpa: z.number().int().nullable(),
  isRemoveTargetCpa: adGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceMaximizeConversionsBiddingScheme = z.infer<typeof adGroupServiceMaximizeConversionsBiddingScheme>;
