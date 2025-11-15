import { z } from 'zod';

import { error } from '../../common/Error';
import { assetServiceReturnValue } from './AssetServiceReturnValue';

export const assetServiceSetTrademarkStatusResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: assetServiceReturnValue
}).nullable();

export type AssetServiceSetTrademarkStatusResponse = z.infer<typeof assetServiceSetTrademarkStatusResponse>;
