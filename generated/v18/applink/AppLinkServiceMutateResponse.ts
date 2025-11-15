import { z } from 'zod';

import { error } from '../../common/Error';
import { appLinkServiceReturnValue } from './AppLinkServiceReturnValue';

export const appLinkServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: appLinkServiceReturnValue
}).nullable();

export type AppLinkServiceMutateResponse = z.infer<typeof appLinkServiceMutateResponse>;
