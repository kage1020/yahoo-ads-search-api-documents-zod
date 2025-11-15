import { z } from 'zod';

import { Error } from './Error';
import { AdGroupAdServiceReturnValue } from './AdGroupAdServiceReturnValue';

export const AdGroupAdServiceSetTrademarkStatusResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupAdServiceReturnValue
}).nullable();

export type AdGroupAdServiceSetTrademarkStatusResponse = z.infer<typeof AdGroupAdServiceSetTrademarkStatusResponse>;
