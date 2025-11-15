import { z } from 'zod';

import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';

export const adGroupServiceTargetCpaBiddingScheme = z.object({
  targetCpa: z.number().int().nullable(),
  isRemoveTargetCpa: adGroupServiceIsRemoveFlg
}).nullable();

export type AdGroupServiceTargetCpaBiddingScheme = z.infer<typeof adGroupServiceTargetCpaBiddingScheme>;
