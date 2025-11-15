import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupAdServiceReturnValue } from './AdGroupAdServiceReturnValue';

export const adGroupAdServiceSetTrademarkStatusResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupAdServiceReturnValue
}).nullable();

export type AdGroupAdServiceSetTrademarkStatusResponse = z.infer<typeof adGroupAdServiceSetTrademarkStatusResponse>;
