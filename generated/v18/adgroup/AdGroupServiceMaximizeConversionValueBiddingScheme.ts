import { z } from 'zod';

import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const adGroupServiceMaximizeConversionValueBiddingScheme = z.object({
  targetRoas: z.number().nullable(),
  isRemoveTargetRoas: adGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceMaximizeConversionValueBiddingScheme = z.infer<typeof adGroupServiceMaximizeConversionValueBiddingScheme>;
