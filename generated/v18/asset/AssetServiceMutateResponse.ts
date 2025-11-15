import { z } from 'zod';

import { error } from '../../common/Error';
import { assetServiceReturnValue } from './AssetServiceReturnValue';

export const assetServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: assetServiceReturnValue
}).nullable();

export type AssetServiceMutateResponse = z.infer<typeof assetServiceMutateResponse>;
