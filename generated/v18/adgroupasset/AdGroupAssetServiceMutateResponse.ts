import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupAssetServiceReturnValue } from './AdGroupAssetServiceReturnValue';

export const adGroupAssetServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupAssetServiceReturnValue
}).nullable();

export type AdGroupAssetServiceMutateResponse = z.infer<typeof adGroupAssetServiceMutateResponse>;
