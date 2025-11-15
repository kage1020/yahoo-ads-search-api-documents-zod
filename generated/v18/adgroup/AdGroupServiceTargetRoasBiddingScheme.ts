import { z } from 'zod';

import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const AdGroupServiceTargetRoasBiddingScheme = z.object({
  targetRoas: z.number().nullable(),
  isRemoveTargetRoas: AdGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceTargetRoasBiddingScheme = z.infer<typeof AdGroupServiceTargetRoasBiddingScheme>;
