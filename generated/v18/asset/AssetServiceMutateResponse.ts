import { z } from 'zod';

import { Error } from './Error';
import { AssetServiceReturnValue } from './AssetServiceReturnValue';

export const AssetServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AssetServiceReturnValue
}).nullable();

export type AssetServiceMutateResponse = z.infer<typeof AssetServiceMutateResponse>;
