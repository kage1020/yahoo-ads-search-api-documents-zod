import { z } from 'zod';

import { AdGroupAsset } from './AdGroupAsset';
import { Error } from './Error';

export const AdGroupAssetServiceReplaceValue = z.object({
  adGroupAssets: z.array(AdGroupAsset).nullable(),
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupAssetServiceReplaceValue = z.infer<typeof AdGroupAssetServiceReplaceValue>;
