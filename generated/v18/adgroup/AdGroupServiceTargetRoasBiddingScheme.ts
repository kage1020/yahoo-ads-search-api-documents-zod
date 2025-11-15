import { z } from 'zod';

import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const adGroupServiceTargetRoasBiddingScheme = z.object({
  targetRoas: z.number().nullable(),
  isRemoveTargetRoas: adGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceTargetRoasBiddingScheme = z.infer<typeof adGroupServiceTargetRoasBiddingScheme>;
