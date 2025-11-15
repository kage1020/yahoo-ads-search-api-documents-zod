import { z } from 'zod';

import { AdGroupAssetServiceList } from './AdGroupAssetServiceList';

export const AdGroupAssetServiceReplaceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupAssetServiceList).nullable()
}).nullable();

export type AdGroupAssetServiceReplaceOperation = z.infer<typeof AdGroupAssetServiceReplaceOperation>;
