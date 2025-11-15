import { z } from 'zod';

import { Error } from './Error';
import { AssetServiceReturnValue } from './AssetServiceReturnValue';

export const AssetServiceSetTrademarkStatusResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AssetServiceReturnValue
}).nullable();

export type AssetServiceSetTrademarkStatusResponse = z.infer<typeof AssetServiceSetTrademarkStatusResponse>;
