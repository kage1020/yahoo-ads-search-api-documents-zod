import { z } from 'zod';

import { Error } from './Error';
import { AppLinkServiceReturnValue } from './AppLinkServiceReturnValue';

export const AppLinkServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AppLinkServiceReturnValue
}).nullable();

export type AppLinkServiceMutateResponse = z.infer<typeof AppLinkServiceMutateResponse>;
