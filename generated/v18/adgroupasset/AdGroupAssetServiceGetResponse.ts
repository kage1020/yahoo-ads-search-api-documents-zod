import { z } from 'zod';

import { Error } from './Error';
import { AdGroupAssetServicePage } from './AdGroupAssetServicePage';

export const AdGroupAssetServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupAssetServicePage
}).nullable();

export type AdGroupAssetServiceGetResponse = z.infer<typeof AdGroupAssetServiceGetResponse>;
