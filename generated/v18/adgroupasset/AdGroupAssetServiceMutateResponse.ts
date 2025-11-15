import { z } from 'zod';

import { Error } from './Error';
import { AdGroupAssetServiceReturnValue } from './AdGroupAssetServiceReturnValue';

export const AdGroupAssetServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupAssetServiceReturnValue
}).nullable();

export type AdGroupAssetServiceMutateResponse = z.infer<typeof AdGroupAssetServiceMutateResponse>;
