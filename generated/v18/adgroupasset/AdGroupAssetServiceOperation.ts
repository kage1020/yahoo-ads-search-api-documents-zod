import { z } from 'zod';

import { AdGroupAsset } from './AdGroupAsset';

export const AdGroupAssetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupAsset).nullable()
}).nullable();

export type AdGroupAssetServiceOperation = z.infer<typeof AdGroupAssetServiceOperation>;
