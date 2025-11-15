import { z } from 'zod';

import { adGroupAsset } from './AdGroupAsset';
import { error } from '../../common/Error';

export const adGroupAssetServiceReplaceValue = z.object({
  adGroupAssets: z.array(adGroupAsset).nullable(),
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupAssetServiceReplaceValue = z.infer<typeof adGroupAssetServiceReplaceValue>;
