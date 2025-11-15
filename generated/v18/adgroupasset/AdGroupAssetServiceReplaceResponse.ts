import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupAssetServiceReplaceReturnValue } from './AdGroupAssetServiceReplaceReturnValue';

export const adGroupAssetServiceReplaceResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupAssetServiceReplaceReturnValue
}).nullable();

export type AdGroupAssetServiceReplaceResponse = z.infer<typeof adGroupAssetServiceReplaceResponse>;
