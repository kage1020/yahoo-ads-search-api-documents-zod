import { z } from 'zod';

import { Error } from './Error';
import { AdGroupAssetServiceReplaceReturnValue } from './AdGroupAssetServiceReplaceReturnValue';

export const AdGroupAssetServiceReplaceResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupAssetServiceReplaceReturnValue
}).nullable();

export type AdGroupAssetServiceReplaceResponse = z.infer<typeof AdGroupAssetServiceReplaceResponse>;
