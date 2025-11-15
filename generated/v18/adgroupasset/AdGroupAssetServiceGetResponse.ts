import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupAssetServicePage } from './AdGroupAssetServicePage';

export const adGroupAssetServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupAssetServicePage
}).nullable();

export type AdGroupAssetServiceGetResponse = z.infer<typeof adGroupAssetServiceGetResponse>;
