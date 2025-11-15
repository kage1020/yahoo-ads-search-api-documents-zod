import { z } from 'zod';

import { adGroupAsset } from './AdGroupAsset';
import { error } from '../../common/Error';

export const adGroupAssetServiceValue = z.object({
  adGroupAsset: adGroupAsset,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupAssetServiceValue = z.infer<typeof adGroupAssetServiceValue>;
