import { z } from 'zod';

import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const AdGroupServiceMaximizeConversionValueBiddingScheme = z.object({
  targetRoas: z.number().nullable(),
  isRemoveTargetRoas: AdGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceMaximizeConversionValueBiddingScheme = z.infer<typeof AdGroupServiceMaximizeConversionValueBiddingScheme>;
