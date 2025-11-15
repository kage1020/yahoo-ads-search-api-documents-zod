import { z } from 'zod';

import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const AdGroupServiceTargetCpaBiddingScheme = z.object({
  targetCpa: z.number().int().nullable(),
  isRemoveTargetCpa: AdGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceTargetCpaBiddingScheme = z.infer<typeof AdGroupServiceTargetCpaBiddingScheme>;
