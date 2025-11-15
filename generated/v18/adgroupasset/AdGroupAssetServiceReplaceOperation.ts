import { z } from 'zod';

import { adGroupAssetServiceList } from './AdGroupAssetServiceList';

export const adGroupAssetServiceReplaceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupAssetServiceList).nullable()
}).nullable();

export type AdGroupAssetServiceReplaceOperation = z.infer<typeof adGroupAssetServiceReplaceOperation>;
