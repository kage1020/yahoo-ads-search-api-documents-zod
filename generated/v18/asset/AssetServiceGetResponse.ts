import { z } from 'zod';

import { error } from '../../common/Error';
import { assetServicePage } from './AssetServicePage';

export const assetServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: assetServicePage
}).nullable();

export type AssetServiceGetResponse = z.infer<typeof assetServiceGetResponse>;
