import { z } from 'zod';

import { AdGroupAsset } from './AdGroupAsset';
import { Error } from './Error';

export const AdGroupAssetServiceValue = z.object({
  adGroupAsset: AdGroupAsset,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupAssetServiceValue = z.infer<typeof AdGroupAssetServiceValue>;
