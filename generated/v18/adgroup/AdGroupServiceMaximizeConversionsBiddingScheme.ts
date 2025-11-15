import { z } from 'zod';

import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const AdGroupServiceMaximizeConversionsBiddingScheme = z.object({
  targetCpa: z.number().int().nullable(),
  isRemoveTargetCpa: AdGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceMaximizeConversionsBiddingScheme = z.infer<typeof AdGroupServiceMaximizeConversionsBiddingScheme>;
