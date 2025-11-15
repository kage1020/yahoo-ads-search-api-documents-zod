import { z } from 'zod';

import { adGroupAsset } from './AdGroupAsset';

export const adGroupAssetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupAsset).nullable()
}).nullable();

export type AdGroupAssetServiceOperation = z.infer<typeof adGroupAssetServiceOperation>;
